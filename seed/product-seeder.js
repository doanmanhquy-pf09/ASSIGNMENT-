var Product = require("../models/Product");
var mongoose = require("mongoose");
mongoose.connect(
  "mongodb+srv://123456:quy24112001@mern-learnit.ui1mq.mongodb.net/test"
);

//-- Nhiều sản phẩm
var products = [
  new Product({
    imagePath: [
      "https://i.pinimg.com/564x/1e/16/27/1e16279e923b16e729e045dcfdf11a2f.jpg",
      "https://i.pinimg.com/236x/5b/75/5d/5b755da798238e888ec28e92987d7a84.jpg",
      "https://i.pinimg.com/236x/00/d0/e3/00d0e31d71a81f60788296d261d08e57.jpg",
    ],
    title: "Sebastian Stan as they film new thriller",
    description:
      "Una chica y un chico enamorados de el amor... anelando tan bello sentimiento como lo es el amor.",
    price: 40,
    cate: "women",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),

  new Product({
    // imagePath:
    //   "https://i.pinimg.com/564x/c1/92/bd/c192bd13cb4deb6177fd2f22b2790603.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/11/74/a4/1174a4263b990f9b8c7217bd13f1723f.jpg",
      "https://i.pinimg.com/236x/d7/1a/82/d71a82bf9a3b7ca5a2dd1e8649b1ebae.jpg",
      "https://i.pinimg.com/236x/ad/c4/f5/adc4f524d6dcc153f710d39a9c12b02a.jpg",
    ],
    title: "Pin de ket Candido em moda",
    description:
      "The Normal People actress, 22, appeared to be in great spirits as she planted a kiss on the Winter Soldier star, 38, while filming their new movie Fresh in Vancouver.",
    price: 20,
    cate: "women",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/564x/c1/92/bd/c192bd13cb4deb6177fd2f22b2790603.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/de/88/eb/de88eb815f1f0999ce77985ddc8b7e34.jpg",
      "https://i.pinimg.com/236x/2d/05/e5/2d05e5d6860c015f740c466d11ddb5c5.jpg",
      "https://i.pinimg.com/236x/bc/bb/58/bcbb5899267c0782bf2bf35daa617833.jpg",
    ],
    title: "My Style discovered by aftiah55 on We Heart It",
    description:
      "Image uploaded by aftiah55. Find images and videos on We Heart It - the app to get lost in what you love.",
    price: 10,
    cate: "women",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/564x/c1/92/bd/c192bd13cb4deb6177fd2f22b2790603.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/55/9a/00/559a00d4c769dfd063b98d083edb318a.jpg",
      "https://i.pinimg.com/236x/a1/f0/20/a1f020f5377a9b1febcc126df7e3b717.jpg",
      "https://i.pinimg.com/236x/82/01/6a/82016a3c626c17228297132aed685a12.jpg",
    ],
    title: "Gothic Women Blazer Plus Size Slim Short Suit",
    description:
      "Women Blazer Women Plus Size Black Blazer Mujer Women Blazers And Jackets 2018 Blazer Women Slim Short Suit Coat",
    price: 20,
    cate: "women",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/564x/c1/92/bd/c192bd13cb4deb6177fd2f22b2790603.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/fc/45/c2/fc45c212d16d161d137e6b2ee6ac78b0.jpg",
      "https://i.pinimg.com/236x/f7/06/5e/f7065e3e00ba1b0b94b384c2ffdd3462.jpg",
      "https://i.pinimg.com/236x/85/6f/33/856f334df0f7c1203763c1ba49e030e7.jpg",
    ],
    title: "Female suit gown",
    description: "Yahoo!検索による「ソン ユンジュ 下着」の画像検索結果です。",
    price: 30,
    cate: "women",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),

  new Product({
    // imagePath:
    //   "https://i.pinimg.com/564x/f4/dd/6d/f4dd6d22cfb99aa809d1b39da37c14e3.jpg",
    imagePath: [
      "https://i.pinimg.com/564x/4b/6f/75/4b6f75233bc6bbce7fae0a723fbe65f4.jpg",
      "https://i.pinimg.com/236x/95/8f/56/958f56a186de1a81dee2b9b6f8ad7390.jpg",
      "https://i.pinimg.com/236x/7e/94/a4/7e94a4eae9a005123322e6fd41570551.jpg",
    ],
    title: "低身長メンズ必見のコーデ術。背が低く見えにくい服と着こなし",
    description:
      "「身長が低くても、カッコよくキマる服って？」かわいい・幼いという印象を持たれがちな低身長の男性でも、クールでスタイリッシュに仕上がるメンズアイテムと着こなし術を、コーデを踏まえてご紹介していきます！",
    price: 40,
    cate: "men",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/564x/f4/dd/6d/f4dd6d22cfb99aa809d1b39da37c14e3.jpg",
    imagePath: [
      "https://i.pinimg.com/564x/f4/dd/6d/f4dd6d22cfb99aa809d1b39da37c14e3.jpg",
      "https://i.pinimg.com/736x/7c/4e/7a/7c4e7ad10f2cd0b028b059c3e818d50e.jpg",
      "https://i.pinimg.com/564x/96/36/66/963666733e2cb99e0405d949353ffb88.jpg",
    ],
    title: "Chao ae nhe",
    description:
      "From the return of the suit to looks inspired by “The Matrix,” the fashion trends that men will be following this fall.",
    price: 50,
    cate: "men",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/564x/f4/dd/6d/f4dd6d22cfb99aa809d1b39da37c14e3.jpg",
    imagePath: [
      "https://i.pinimg.com/564x/b9/c6/0b/b9c60b133168c0e6bdfd39c5cb766e13.jpg",
      "https://i.pinimg.com/236x/37/9d/f0/379df00741285a6595cf5be9dc4948ec.jpg",
      "https://i.pinimg.com/236x/c7/43/f5/c743f5e84969b4091cb00949a7545607.jpg",
    ],
    title: "korean boy outfit | Kpop fashion men, Korean",
    description:
      "Jul 2, 2021 - Outfits, cool, fashion, fashion tips, outfit of the day, korean, ulzzang boys, ulzzang, korean style, handsome, cute, OOTD, fashion style, boys, men, boyfriend material, husband material",
    price: 60,
    cate: "men",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/564x/f4/dd/6d/f4dd6d22cfb99aa809d1b39da37c14e3.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/45/f1/86/45f186f58fed84f7a93ac0accd64d37e.jpg",
      "https://i.pinimg.com/236x/97/3b/3a/973b3a6774259586929362efaa378d82.jpg",
      "https://i.pinimg.com/236x/f0/d3/2c/f0d32c738c6857c6469f32e9ec081122.jpg",
    ],
    title: "KOREAN SUMMER PRESET",
    description:
      "Lightroom presets, Mobile preset, Desktop preset, Photo editing, Influencer, Creator, Instagram feed, Lightroom, preset Lightroom presets, Mobile preset, Desktop preset, Photo editing",
    price: 70,
    cate: "men",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/564x/f4/dd/6d/f4dd6d22cfb99aa809d1b39da37c14e3.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/a5/6d/0a/a56d0ad867633f505402710000e579af.jpg",
      "https://i.pinimg.com/236x/71/f3/38/71f338b76a2c3fa0f45d7f33dcfc4122.jpg",
      "https://i.pinimg.com/236x/82/a4/89/82a489f85e36c4c2c1186064f7c081d2.jpg",
    ],
    title: "INTOHYPEZONE",
    description:
      "Cùng điểm qua những cách phối đồ khi đi Đà Lạt cho nam đang được đông đảo fashionista theo đuổi sau đây nhé!",
    price: 80,
    cate: "men",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),

  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/ad/31/44/ad314443dd5e94ae8d063159f7c6c1bd.jpg",

    imagePath: [
      "https://i.pinimg.com/236x/bf/d2/81/bfd281e7e38d27dd1179291f89e6ce55.jpg",
      "https://i.pinimg.com/736x/e4/44/73/e444735be6f43bd884defd567062c740.jpg",
      "https://i.pinimg.com/236x/60/2b/49/602b49177ea0cb5057758d136fb1cc50.jpg",
    ],
    title: "Rolex Sea-Dweller",
    description:
      "For those exploring the depths of the oceans. The Sea-Dweller in Oystersteel features a distinctive black dial with large luminescent hour markers, a unidirectional 60-minute rotatable bezel ",
    price: 90,
    cate: "watches",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/ad/31/44/ad314443dd5e94ae8d063159f7c6c1bd.jpg",

    imagePath: [
      "https://i.pinimg.com/564x/2f/37/38/2f3738fc8b268d08fe9f647f056d57f3.jpg",
      "https://i.pinimg.com/236x/ef/3e/5c/ef3e5c5e999f882cd8ffcce907f20264.jpg",
      "https://i.pinimg.com/236x/46/89/5a/46895a3c93c84ba9178cb24100bf373c.jpg",
    ],
    title: "DW Iconic",
    description:
      "This new Iconic Link Daniel Wellington is simply stunning💛 classic and unique, we are loving it. 15% OFF using Code: ALISSA15 at checkout or in store",
    price: 10,
    cate: "watches",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/ad/31/44/ad314443dd5e94ae8d063159f7c6c1bd.jpg",

    imagePath: [
      "https://i.pinimg.com/236x/14/da/b5/14dab57265825886a6a2e4c8f4a1e5f4.jpg",
      "https://i.pinimg.com/236x/db/fc/f1/dbfcf11145dae8abb1315ea3acd06f0b.jpg",
      "https://i.pinimg.com/236x/19/1b/c2/191bc23ad0f5c951ae91e6546c28b935.jpg",
    ],
    title: "Timeless and elegant watches online",
    description:
      "Use my code AVDIOPHILE and you’ll receive 15% off your purchase at danielwellington.com or in a DW store",
    price: 20,
    cate: "watches",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/ad/31/44/ad314443dd5e94ae8d063159f7c6c1bd.jpg",

    imagePath: [
      "https://i.pinimg.com/236x/04/d0/43/04d04307f232402168d0f847f49f0f3d.jpg",
      "https://i.pinimg.com/236x/82/fe/95/82fe9516f231211bdf1ff7bbd0b4cf53.jpg",
      "https://i.pinimg.com/236x/c0/49/67/c04967cf904df21512d68ae901023199.jpg",
    ],
    title: "Rosefield Uhren | Damenuhren",
    description:
      "Originell, minimalistisch und einfach zum Verlieben schön: Unsere tollen Damen Uhren unterstreichen die Individualität ihrer Trägerin und stehen für einen unkomplizierten, modernen und",
    price: 30,
    cate: "watches",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/ad/31/44/ad314443dd5e94ae8d063159f7c6c1bd.jpg",

    imagePath: [
      "https://i.pinimg.com/236x/f9/4c/7d/f94c7da0b1f2c343249e3ec903d463d8.jpg",
      "https://i.pinimg.com/236x/3d/cd/0d/3dcd0d05af041063f4f69ab8802833b5.jpg",
      "https://i.pinimg.com/236x/48/c2/2c/48c22cd1e6be072d51da224e4a465c29.jpg",
    ],
    title: "Mens Platinum Chain Necklace",
    description:
      "Faça essa visualização 1x por dia, durante 7 dias. 💰 Curso Lei da Atração",
    price: 40,
    cate: "watches",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),

  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/e1/d4/02/e1d4027da48419389ad5c1d8b6550404.jpg",

    imagePath: [
      "https://i.pinimg.com/236x/e1/d4/02/e1d4027da48419389ad5c1d8b6550404.jpg",
      "https://i.pinimg.com/236x/0a/3a/e7/0a3ae79768bdf3fd0a99052608f40ed7.jpg",
      "https://i.pinimg.com/236x/01/d2/3f/01d23f1ecfd89e6482adbd09475bace4.jpg",
    ],
    title: "Chaussures printemps été 2020",
    description:
      "this quiz has both masculin and feminine clothes and i really hope you can find, at least one outfit that you like!!!",
    price: 50,
    cate: "shoes",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/e1/d4/02/e1d4027da48419389ad5c1d8b6550404.jpg",

    imagePath: [
      "https://i.pinimg.com/236x/ea/69/e4/ea69e497622aa48f049597535af15fda.jpg",
      "https://i.pinimg.com/236x/90/53/1a/90531a1e1635dbfc18e580e865a86efc.jpg",
      "https://i.pinimg.com/236x/77/ca/b2/77cab2e6b63a040b3e4584c629d2c10b.jpg",
    ],
    title: "Converse Chuck Taylor Black",
    description:
      "Rock a classic pair of skate kicks on your deck with the Chuck Taylor Black & White High Top Shoes",
    price: 30,
    cate: "shoes",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/e1/d4/02/e1d4027da48419389ad5c1d8b6550404.jpg",

    imagePath: [
      "https://i.pinimg.com/236x/2d/06/4f/2d064f6a7d1c70c3a6f7d4b64f329479.jpg",
      "https://i.pinimg.com/236x/62/bf/bf/62bfbf4655ea289b4b3cfb67c4d8ac4c.jpg",
      "https://i.pinimg.com/236x/fa/5d/6c/fa5d6c7c3387692503cc7af08850adc0.jpg",
    ],
    title: "Converse Chuck Taylor All",
    description: "CONVERSE Chuck Taylor All Star Black High Top Shoes",
    price: 14,
    cate: "shoes",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/e1/d4/02/e1d4027da48419389ad5c1d8b6550404.jpg",

    imagePath: [
      "https://i.pinimg.com/236x/1e/85/a1/1e85a1c8b42f09673f9a597801a0d9da.jpg",
      "https://i.pinimg.com/236x/69/76/91/69769169416773b467a24b23a3727dfd.jpg",
      "https://i.pinimg.com/236x/24/97/2c/24972c7d4fa12f04dc2166188e30d364.jpg",
    ],
    title: "BOTA CONVERSE PNG ",
    description:
      "Brand Name Rarove Upper Material Canvas Fashion Element Sewing Pattern Type Solid Lining Material Canvas Insole Material EVA Season Spring/Autumn Heel",
    price: 16,
    cate: "shoes",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/e1/d4/02/e1d4027da48419389ad5c1d8b6550404.jpg",

    imagePath: [
      "https://i.pinimg.com/564x/54/4b/3e/544b3e0603a6bb60e26559830c3b0058.jpg",
      "https://i.pinimg.com/236x/1a/14/54/1a1454a69640223f937009ebce060e10.jpg",
      "https://i.pinimg.com/236x/eb/d3/87/ebd387bf7f72ec8a597808dc9f609cc2.jpg",
    ],
    title: "Bottega veneta boots",
    description:
      "Capa feita por:@akemikagayaki Sn muda de cidade após alguns incidentes em sua antiga escola,em sua nova cidade ela acaba conhecendo Eddie Munson,será ",
    price: 17,
    cate: "shoes",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/e1/d4/02/e1d4027da48419389ad5c1d8b6550404.jpg",

    imagePath: [
      "https://i.pinimg.com/236x/56/b2/37/56b237bab1a749cc10174edb400fa78a.jpg",
      "https://i.pinimg.com/236x/1a/44/4e/1a444e1ccc8f259d87a113dee7aae94f.jpg",
      "https://i.pinimg.com/236x/39/11/17/391117cc3794636b2f9f068383321939.jpg",
    ],
    title: "Official Photos of the Air Jordan 1 High",
    description:
      "Jordan Brand will be bringing back the classic Air Jordan 1 Retro High OG “Black/White” colorway from 1985, but this 2019 release will come with a bit of a twist. Nearly an identical color",
    price: 19,
    cate: "shoes",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/a4/b8/2f/a4b82ff9aff8b8e00967c53a69c95b7d.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/bc/88/b7/bc88b79e2966143a9ecea1e87ceeb986.jpg",
      "https://i.pinimg.com/236x/0b/84/e5/0b84e57fe897072e24605970fbb0af7e.jpg",
      "https://i.pinimg.com/236x/6c/5a/67/6c5a671133aa02bc6d01ee500ace9aaf.jpg",
    ],
    title: "ヌメ革の手縫いトートバッグが完成しました",
    description:
      "完成までを振り返る kumosha.comヌメ革のトートバッグの持手を縫うhttps://kumosha.com/now_160114今日はＫさんからご依頼のトートバッグ２型の制作にかかりました。持手の制作から始めましょう。赤い栃木レザーの",
    price: 23,
    cate: "bag",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/a4/b8/2f/a4b82ff9aff8b8e00967c53a69c95b7d.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/d9/b8/94/d9b894207d70a33555246e865ca01c5a.jpg",
      "https://i.pinimg.com/236x/66/20/63/662063e0aa7c48e6e06aa1e034f84ffa.jpg",
      "https://i.pinimg.com/236x/7e/d9/08/7ed908c96655e3f82cd5c91d589b4b22.jpg",
    ],
    title: "Luxury fashion & independent designers",
    description:
      "Solid Color Pendant Tote Bag ($81) ❤ liked on Polyvore featuring bags, handbags and tote bags",
    price: 324,
    cate: "bag",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/a4/b8/2f/a4b82ff9aff8b8e00967c53a69c95b7d.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/b9/59/0a/b9590a9447a023a23a34e4f2a265579b.jpg",
      "https://i.pinimg.com/236x/7a/16/68/7a166814b92c6bf44df6c63f851ccb84.jpg",
      "https://i.pinimg.com/236x/e5/e3/d5/e5e3d52fc4b980e7717a73e939d1b6c3.jpg",
    ],
    title: "portefeuille Michael Kors - Livraison gratuite : Vêtements",
    description:
      "Gucci winter 2015 What a lovely bag made by Gucci. Gucci #Gucci #Purse makes very beautiful bags! I love them(Gucci Watches,Gucci Wallets,Gucci Sunglasses,Gucci",
    price: 65,
    cate: "bag",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/a4/b8/2f/a4b82ff9aff8b8e00967c53a69c95b7d.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/ef/3a/bf/ef3abf5f30e335310a9b7c26d70da70b.jpg",
      "https://i.pinimg.com/236x/0d/00/11/0d00112305d4d6dcb4f4b86b995611df.jpg",
      "https://i.pinimg.com/236x/d4/8c/c9/d48cc9d70759dea1be4c5b766a174d95.jpg",
    ],
    title: "Womens Luxury Fashion",
    description:
      "Browse the latest womenswear online at Burberry.com. Discover seasonal trench coats, dresses, tailoring and casual wear  designed by Riccardo Tisci.",
    price: 54,
    cate: "bag",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/a4/b8/2f/a4b82ff9aff8b8e00967c53a69c95b7d.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/de/28/e4/de28e40004690c36c151bb0d9f51be5a.jpg",
      "https://i.pinimg.com/236x/1a/a7/3e/1aa73ef9295959f8a936e83cd466074a.jpg",
      "https://i.pinimg.com/236x/a4/42/eb/a442eb13e6bc7a658aabfaf226178286.jpg",
    ],
    title: "Extra Classic Handbag",
    description:
      "Shop the Guess Cate Purse for Women at Buckle.com. The Buckle carries the latest Guess products and styles, so come back often. Shop at Buckle.com today!",
    price: 6,
    cate: "bag",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/a4/b8/2f/a4b82ff9aff8b8e00967c53a69c95b7d.jpg",
    imagePath: [
      "https://i.pinimg.com/736x/3a/20/a8/3a20a8bec6036355bd7a34e5fe5160d3.jpg",
      "https://i.pinimg.com/736x/15/f8/dd/15f8dda40ba051e4166a523c426a2bb9.jpg",
      "https://i.pinimg.com/236x/c3/11/07/c31107e87c3514839ef86f7ecd13f1b0.jpg",
    ],
    title: "Kanna",
    description:
      "Lets learn how to draw Kanna Kamui from Kobayashi today! Kanna Kamui is one of the Dragons in Miss Kobayashi’s Dragon Maid franchise. (from animevice.wikia.com) ",
    price: 99999,
    cate: "loli",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/a4/b8/2f/a4b82ff9aff8b8e00967c53a69c95b7d.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/84/7a/65/847a65683f58bee8bed86815d9883681.jpg",
      "https://i.pinimg.com/236x/34/5e/bb/345ebb057a73dce84c7714fb15ac5b7c.jpg",
      "https://i.pinimg.com/236x/1a/84/35/1a8435b262f70dc441a52bf15a9c620d.jpg",
    ],
    title: "Anya",
    description:
      "#spyfamily #spyxfamily #loid #loidforger #anya #sxf #anime #animewallpaper #manga #yor #yorforger #twilight",
    price: 99999,
    cate: "loli",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/a4/b8/2f/a4b82ff9aff8b8e00967c53a69c95b7d.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/2e/6e/13/2e6e138e8cb9b4e5ac1450d92aafcde5.jpg",
      "https://i.pinimg.com/236x/9a/94/a2/9a94a26db8041a6107b082c1d20ae958.jpg",
      "https://i.pinimg.com/236x/50/7a/e6/507ae63ca10174707c43611a026d3871.jpg",
    ],
    title: "Gawr Gura",
    description:
      "This is r/cutelittlefangs, a place for celebrating, well... cute little fangs. We hope you enjoy your time here! This is a subreddit for fans of...",
    price: 99999,
    cate: "loli",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/a4/b8/2f/a4b82ff9aff8b8e00967c53a69c95b7d.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/93/01/1b/93011b0598e1ca3e889f392e9709a899.jpg",
      "https://i.pinimg.com/236x/df/b8/35/dfb835a30d27283f95f3eca41d2062ca.jpg",
      "https://i.pinimg.com/236x/0b/a7/2b/0ba72b689b9a7674b5fdf7fe68f9546f.jpg",
    ],
    title: "Filo Chan",
    description:
      "Tate no Yuusha no Nariagari ou The Rising of the Shield Hero é um anime shounen que vem chamando a atenção dos fãs otakus! Este anime estreou este ano e já está cotado para ser um dos melhores…",
    price: 10000,
    cate: "loli",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
  new Product({
    // imagePath:
    //   "https://i.pinimg.com/736x/a4/b8/2f/a4b82ff9aff8b8e00967c53a69c95b7d.jpg",
    imagePath: [
      "https://i.pinimg.com/236x/96/48/16/9648166181a0cedd8a330ce79b0d112c.jpg",
      "https://i.pinimg.com/236x/a0/8d/5f/a08d5f1544505a855486dd72462bda12.jpg",
      "https://i.pinimg.com/236x/08/e7/ff/08e7ffae88ce7f9a3e06b3d671f0233a.jpg",
    ],
    title: "Klee",
    description: "Boom boom bakudan,Boom boom bakudan,Boom boom bakudan",
    price: 10000,
    cate: "loli",
    // color: ["Black", "White", "Red"],
    // size: ["S", "M", "L"],
  }),
];

var done = 0;
for (var i = 0; i < products.length; i++) {
  //Lưu sản phẩm vào csdl
  products[i].save(function (err, result) {
    done++;
    if (done === products.length) {
      exit();
    }
  });
}
function exit() {
  mongoose.disconnect();
}
