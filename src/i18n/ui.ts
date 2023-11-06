export const SiteLanguages = {
    en: 'English',
    sr: 'Srpski',
} as const;

export const defaultLang = 'en';

export const ui = {
    en: {
        'home.logo': '://blog',
        'home.languageLabel': 'Language',
        'home.title': 'Blog',
        'home.disclaimer': 'DISCLAIMER: This blog is a collection of my personal notes. I hope you find it useful, but be sure to do your own research!',
        'home.latest': 'Latest Posts',
        'home.noPostsFound': 'No posts found.',
        'articleCard.publishedOn': 'Published on',
        'articleCard.readMore': 'Read more...',
        'toc.title': 'Table of Contents',
        'toc.relatedPosts': 'Related Posts',
        'development.title': 'Development',
        'development.subtitle': 'Posts on topics regarding development of software.',
        'security.title': 'Security',
        'security.subtitle': 'Posts on topics regarding software security.',
        'operations.title': 'Operations',
        'operations.subtitle': 'Posts on topics regarding operations.'
    },
    sr: {
        'home.languageLabel': 'Jezik',
        'home.disclaimer': 'OBAVEŠTENJE: Ovaj blog je kolekcija mojih ličnih beleški. Nadam se da će ti biti od koristi, ali uradi i sopstveno istraživanje!',
        'home.latest': 'Najnovije',
        'home.noPostsFound': 'Nisu pronađeni postovi.',
        'articleCard.publishedOn': 'Objavljeno',
        'articleCard.readMore': 'Pročitaj više...',
        'toc.title': 'Sadržaj',
        'toc.relatedPosts': 'Povezani članci',
    },
} as const;