export const DocumentationOptions = {
  BROWSING: 'browsing',
  COOKIE_MANAGER: 'cookieManager',
  PAYMENT: 'payment',
  EMBED: 'embed'
}

export const DocumentationOptionsText = {
  BROWSING: 'Browsing History',
  COOKIE_MANAGER: 'Cookie Manager',
  PAYMENT: 'Payment',
  EMBED: 'Embed Code'
}

export const ALIGN = {
vertical: 'col',
horizontal: 'row'
}

export const DefaultCookieSettings = {
  color: '#000000',
  fontSize: '16px',
  bgColor: '#ffffff',
  text: 'ABC.com seeks your social graph to give you promotional offers. Install Kleo extension.',
  size: {
    width: '700px',
    height: '100px',
  },
  alignButtonsWithText: ALIGN.horizontal,
  buttonProps: {
    alignButtons: ALIGN.horizontal,
    accept: {
      bgColor: '#222222',
      color: '#ffffff',
      fontSize: '16px',
      text: 'Accept',
      borderColor: '#ffffff'
    },
    manage: {
      bgColor: '#ffffff',
      color: '#222222',
      fontSize: '16px',
      text: 'Manage',
      borderColor: '#222222'
    },
    size: {
      width: '100px',
      height: '40px'
    }
  }
}