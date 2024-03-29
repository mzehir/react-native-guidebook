const typography = {
  display: {
    //* small: Bu stil, çok büyük ve dikkat çekici bir metin için kullanılabilir. Örneğin, bir uygulamanın ana sayfasında yer alan büyük bir başlık için uygun olabilir. İçerikler: Ana Başlık, Öne Çıkan Haber Başlıkları
    //* medium: Biraz daha küçük bir boyutta, yine dikkat çekici bir başlık için kullanılabilir. Örneğin, bir seçenek menüsünün başlığı veya bir kategori başlığı için kullanılabilir. İçerikler: Kategori Başlıkları, Seçenek Menüleri
    //* large: En büyük boyutta, çok önemli ve büyük bir başlık için kullanılabilir. Örneğin, bir etkinliğin başlığı veya ana sayfadaki vurgulu bir metin için uygun olabilir. İçerikler: Etkinlik Başlıkları, Öne Çıkan İçerikler
    small: {fontSize: 36, fontWeight: 400, letterSpacing: 0, lineHeight: 44},
    medium: {fontSize: 45, fontWeight: 400, letterSpacing: 0, lineHeight: 52},
    large: {fontSize: 57, fontWeight: 400, letterSpacing: 0, lineHeight: 64},
  },

  headline: {
    //* small: Küçük bir bölüm veya alt başlık için kullanılabilir. Örneğin, bir blog gönderisinin alt başlığı veya bir ürünün özelliklerinin listelendiği bir başlık için uygun olabilir. İçerikler: Alt Başlıklar, Blog Gönderisi Başlıkları
    //* medium: Orta büyüklükte, önemli bir bölüm veya alt başlık için kullanılabilir. Örneğin, bir makalenin bölümlerinin başlıkları veya bir ürünün genel özelliklerinin listelendiği bir başlık için uygun olabilir. İçerikler: Bölüm Başlıkları, Ürün Özellik Başlıkları
    //* large: En büyük boyutta, çok önemli bir bölüm veya alt başlık için kullanılabilir. Örneğin, bir raporun ana bölümlerinin başlıkları veya bir ürünün benzersiz özelliklerinin listelendiği bir başlık için uygun olabilir. İçerikler: Ana Bölüm Başlıkları, Ürünün Öne Çıkan Özellikleri
    small: {fontSize: 24, fontWeight: 400, letterSpacing: 0, lineHeight: 32},
    medium: {fontSize: 28, fontWeight: 400, letterSpacing: 0, lineHeight: 36},
    large: {fontSize: 32, fontWeight: 400, letterSpacing: 0, lineHeight: 40},
  },

  title: {
    //* small: Küçük bir başlık veya alt başlık için kullanılabilir. Örneğin, bir form alanının başlığı veya bir sayfanın alt başlığı için uygun olabilir. İçerikler: Form Başlıkları, Sayfa Alt Başlıkları
    //* medium: Orta büyüklükte, bir form alanının ana başlığı veya bir kartın başlığı için kullanılabilir. İçerikler: Form Ana Başlıkları, Kart Başlıkları
    //* large: En büyük boyutta, çok önemli bir başlık veya ana başlık için kullanılabilir. Örneğin, bir sayfanın ana başlığı veya bir yazının başlığı için uygun olabilir. İçerikler: Sayfa Ana Başlıkları, Makale Başlıkları
    small: {fontSize: 14, fontWeight: 500, letterSpacing: 0.1, lineHeight: 20},
    medium: {
      fontSize: 16,
      fontWeight: 500,
      letterSpacing: 0.15,
      lineHeight: 24,
    },
    large: {fontSize: 22, fontWeight: 400, letterSpacing: 0, lineHeight: 28},
  },

  label: {
    //* small: Küçük bir etiket veya alt başlık için kullanılabilir. Örneğin, bir form alanının altında bulunan açıklamalar için veya bir liste öğesinin başlığı için uygun olabilir. İçerikler: Form Etiketleri, Liste Başlıkları
    //* medium: Orta büyüklükte, bir form alanının yanında bulunan etiket veya açıklamalar için veya bir kartın alt başlığı için kullanılabilir. İçerikler: Form Açıklama Etiketleri, Kart Alt Başlıkları
    //* large: En büyük boyutta, önemli bir etiket veya alt başlık için kullanılabilir. Örneğin, bir form alanının başlığı veya bir liste öğesinin önemli bir başlığı için uygun olabilir. İçerikler: Form Başlık Etiketleri, Önemli Liste Başlıkları
    small: {fontSize: 11, fontWeight: 500, letterSpacing: 0.5, lineHeight: 16},
    medium: {fontSize: 12, fontWeight: 500, letterSpacing: 0.5, lineHeight: 16},
    large: {fontSize: 14, fontWeight: 500, letterSpacing: 0.1, lineHeight: 20},
  },

  body: {
    //* small: Küçük boyutta, metin içeriğinin detaylarını veya açıklamalarını göstermek için kullanılabilir. Örneğin, bir ürünün açıklamaları veya bir blog gönderisinin içeriği için uygun olabilir. İçerikler: Ürün Açıklamaları, Blog İçerikleri
    //* medium: Orta büyüklükte, genel metin içeriğini göstermek için kullanılabilir. Örneğin, bir makalenin metni veya bir ürünün detaylı açıklamaları için uygun olabilir. İçerikler: Makale Metinleri, Ürün Detay Açıklamaları
    //* large: En büyük boyutta, önemli ve detaylı bir metin içeriği için kullanılabilir. Örneğin, bir raporun metni veya bir ürünün öne çıkan özelliklerinin detaylı açıklamaları için uygun olabilir. İçerikler: Rapor Metinleri, Öne Çıkan Ürün Detayları
    small: {fontSize: 12, fontWeight: 400, letterSpacing: 0.4, lineHeight: 16},
    medium: {
      fontSize: 14,
      fontWeight: 400,
      letterSpacing: 0.25,
      lineHeight: 20,
    },
    large: {fontSize: 16, fontWeight: 400, letterSpacing: 0.15, lineHeight: 24},
  },

  forButton: {
    small: {
      fontSize: 12,
      fontWeight: 'normal',
    },
    medium: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    large: {
      fontSize: 20,
      fontWeight: 'bold',
    },
  },

  forSelect: {
    small: {
      fontSize: 12,
      fontWeight: 'normal',
    },
    medium: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    large: {
      fontSize: 20,
      fontWeight: 'normal',
    },
  },

  forTextInput: {
    small: {
      fontSize: 12,
      fontWeight: 'normal',
    },
    medium: {
      fontSize: 16,
      fontWeight: 'normal',
    },
    large: {
      fontSize: 20,
      fontWeight: 'normal',
    },
  },
};

export default typography;
