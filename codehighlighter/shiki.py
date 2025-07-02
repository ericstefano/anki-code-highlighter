"""The Shiki highlighter.

Most of the magic of Shiki happens at runtime. This plugin includes the
necessary JS and CSS files in card templates. This module only wraps the code,
so that the JS scripts can pick it up.

See DEV.md for more information on the highlighter concept."""
from typing import Optional

import bs4

from . import shikilangs
from .bs4extra import create_soup
from .shikilangs import Language
from .html import PlainString

__all__ = ['highlight']

def highlight(
        code: PlainString,
        language: Optional[Language],
        block_style: str = "display:flex; justify-content:center;") -> bs4.Tag:
    """
    Highlights the code snippet with Shiki.

    :param code: A code snippet without HTML markup.
    :param language: The language of the code snippet.
    :param block_style: The style of the <pre> tag.
    :return: A BeautifulSoup tag representing the highlighted code.
    """
    soup = create_soup()
    code_tag = soup.new_tag('code')
    pre_tag = soup.new_tag('pre')
    pre_tag.append(code_tag)
    code_tag.append(code)

    if language is None:
        pre_tag['data-language'] = ['nohighlight']
    else:
        pre_tag['data-language'] = [language.alias]

    if block_style:
        pre_tag['style'] = block_style

    return pre_tag

def get_available_languages_as_dict() -> dict[str, Language]:
    """Returns a dict of all available languages keyed by their name."""
    return {lang.name: lang for lang in shikilangs.languages}
