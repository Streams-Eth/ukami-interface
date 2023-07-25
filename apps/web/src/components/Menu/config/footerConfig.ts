import { FooterLinkType } from '@pancakeswap/uikit'
import { ContextApi } from '@pancakeswap/localization'

export const footerLinks: (t: ContextApi['t']) => FooterLinkType[] = (t) => [
  {
    label: t('About'),
    items: [
      {
        label: t('Contact'),
        href: 'https://discord.gg/svja2EyT99',
        isHighlighted: true,
      },
      {
        label: t('Whitepaper'),
        href: 'http://ukami.io/wp-content/uploads/2023/07/Ukami-Whitepaper.pdf',
      },
    ],
  },
  {
    label: t('Help'),
    items: [
      {
        label: t('Customer Support'),
        href: 'https://t.me/UkamiFinance',
      },
      {
        label: t('Guides'),
        href: 'https://ukami.io/',
      },
    ],
  },
  {
    label: t('Developers'),
    items: [
      {
        label: 'Github',
        href: 'https://github.com/ukami',
      },
      {
        label: t('Documentation'),
        href: 'https://ukami.io/',
      },
      
    ],
  },
]
