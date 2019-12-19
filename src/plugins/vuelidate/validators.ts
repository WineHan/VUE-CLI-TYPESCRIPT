
export function notGmail (value = '') {
  return !value.includes('gmail')
}

export function isEmailAvailable (value:any) {
  if (value === '') return true

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(value.length > 10)
    }, 500)
  })
}
