export default {
    title: 'Cowsigner',
    description: 'Just playing around.',
    themeConfig: {
      logo: { light: '.vitepress/assets/solo-logo-black.png', dark: '.vitepress/assets/solo-logo-white.png' },
      nav: [
        { text: 'Home', link: '/' },
        { text: 'About', link: '/about' },
        { text: 'Contact', link: '/contact' },
      ],
      sidebar: [
        {
          text: 'Getting Started',
          items: [
            { text: 'How it works', link: '/howItWorks' },
            { text: 'Quick Start', link: '/quickStart' },
            { text: 'Pay for account creation', link: '/accountCreation' },
          ]
        },
        {
          text: 'Work with solana',
          items: [
            { text: 'Deposit Solana', link: '/solana/depositSolana' },
            { text: 'WithDraw Solana', link: '/solana/withDrawSolana' },
          ]
        },
      ]
    }
  }