export const _29cmcokr = () => {
  const { innerHTML } = document.body;

  const select = (startText, endText, startIndex?) => {
    const start = innerHTML.indexOf(startText, startIndex) + startText.length;
    const end = innerHTML.indexOf(endText, start);
    return innerHTML.slice(start, end);
  };

  let originalPrice = select(
    '<!----><div _ngcontent-c33="" class="o">\n                    <span _ngcontent-c33="" class="num">',
    '</span>',
    0
  );
  let salePrice = select(
    '%</span> ',
    '<em _ngcontent-c33="" class="unit">원</em></span>',
    innerHTML.indexOf(
      '<span _ngcontent-c33="" class="num"><span _ngcontent-c33="">'
    )
  );
  if (
    innerHTML.indexOf(
      '<!----><div _ngcontent-c33="" class="o">\n                    <span _ngcontent-c33="" class="num">',
      0
    ) === -1
  ) {
    originalPrice = select(
      '<!----><div _ngcontent-c33="" class="p">\n                    <span _ngcontent-c33="" class="num">',
      '<em',
      0
    );
    salePrice = '0';
  }

  const name = select('<div _ngcontent-c33="" class="name">', '</div>')
    .trim()
    .slice(7);

  return {
    name: name.slice(
      name.indexOf('</span>') > 0 ? name.indexOf('</span>') + 7 : 0
    ),
    imageUrl: select(' data-blazy="', '"'),
    brandKor: select('<h1 _ngcontent-c37="" class="kor">', '</h1>'),
    originalPrice,
    salePrice,
  };
};

export const _hivercokr = () => {
  const name = (document.getElementsByClassName(
    'detail_title'
  )[0] as HTMLDivElement).textContent;
  const brandKor = (document.getElementsByClassName('list_store_title')[0]
    .children[0] as HTMLAnchorElement).text;
  const imageUrl = (document.getElementById('imageGallery').children[0]
    .children[0] as HTMLImageElement).src;
  let salePrice = (document.getElementsByClassName(
    'detail_price'
  )[0] as HTMLDivElement).textContent;
  let originalPrice = salePrice;
  if (salePrice.indexOf('%') > -1) {
    const { innerHTML } = document.getElementsByClassName('detail_price')[0];
    salePrice = innerHTML.slice(
      innerHTML.indexOf('</b>'),
      innerHTML.indexOf('<span')
    );
    originalPrice = document.getElementsByClassName('detail_price')[0]
      .children[1].innerHTML;
  }

  return { name, brandKor, imageUrl, salePrice, originalPrice };
};
