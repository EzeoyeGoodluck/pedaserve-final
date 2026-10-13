/**
 * Site photography, served from Unsplash's image CDN. All photos are free to
 * use under the Unsplash License (https://unsplash.com/license); credit is
 * not required but appreciated, so the photographer is noted on each entry.
 *
 * To self-host later, download each photo from the page URL in the comment,
 * drop it in /public/images, and change the path here. Nothing else needs
 * to change.
 */
const cdn = (id: string, w = 1400) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=72`;

export const IMAGES = {
  // Village shop with a red post box, UK. T (@tanyabarrow)
  // https://unsplash.com/photos/A_qHnEbfRsw
  heroShop: cdn('photo-1768225324952-07dc4e64a875', 1600),

  // Two women in a small shop. Blake Wisz (@blakewisz)
  // https://unsplash.com/photos/GFrBMipOd_E
  shopOwners: cdn('photo-1556740758-90de374c12ad'),

  // Smiling owner at a checkout counter. Patrick Tomasso (@impatrickt)
  // https://unsplash.com/photos/fMntI8HAAB8
  checkout: cdn('photo-1556745753-b2904692b3cd'),

  // Man working at a laptop with a notebook. M. Cooper (@mcoopercreative)
  // https://unsplash.com/photos/Xe4dyCmmXR0
  laptopNotebook: cdn('photo-1648747067032-d4300a719cfb'),

  // Two people working at a table with laptops. Priscilla Du Preez
  // https://unsplash.com/photos/nNMBa7Y1Ymk
  twoLaptops: cdn('photo-1579389083046-e3df9c2b3325'),

  // Man at a laptop. Priscilla Du Preez
  // https://unsplash.com/photos/OEdkPaxYMXU
  manLaptop: cdn('photo-1579389083078-4e7018379f7e'),

  // Owner in a white shirt at a kitchen counter. Dan Burton (@dan__burton)
  // https://unsplash.com/photos/wHsOV75Xi8Y
  kitchenOwner: cdn('photo-1594402919317-9e67dca0a305'),

  // Small shop front with "wanted customers" sign. Trevor John Williams
  // https://unsplash.com/photos/7UOnLpZOjVQ
  wantedCustomers: cdn('photo-1786524725208-3d315887edc7'),

  // Small store interior with shelves. Bernd Dittrich (@hdbernd)
  // https://unsplash.com/photos/Q6lJLndyw-4
  storeInterior: cdn('photo-1759860002165-f059bfcee759'),

  // Plants on a wooden table in a shop. Dex Ezekiel (@dexezekiel)
  // https://unsplash.com/photos/uwb7Mbj2Bmo
  plantShop: cdn('photo-1613375772563-af532af5cef9'),

  // Small boutique shop front. Piret Ilver (@saltsup)
  // https://unsplash.com/photos/EvTuMAnhnKE
  boutique: cdn('photo-1612012060786-58a0bf29474c'),
};

/** Absolute URL used for social sharing previews when a page has no cover. */
export const OG_DEFAULT = cdn('photo-1768225324952-07dc4e64a875', 1200);
