const spacing = (num: number) => `${num / 4}rem`;

export default {
  'table': {
    borderCollapse: 'collapse',
  },
  'th': {
    textAlign: 'inherit',
  },
  '.table': {
    width: '100%',
    maxWidth: '100%',
    marginBottom: '1rem',
    backgroundColor: '#fff',
    'td,th': {
      padding: spacing(3),
      verticalAlign: 'top',
      borderTop: '1px solid'
    },
    'thead th': {
      verticalAlign: 'bottom',
      borderBottom: '2px solid'
    },
    'tbody tr:nth-of-type(odd)': {
      backgroundColor: 'rgba(0,0,0,.05)',
    }
  },
}