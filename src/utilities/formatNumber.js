const formatNumber = (number) => {
  number = String(number)
  number = number.replaceAll(' ', '')
  if (number.length > 3) {
    number = [...number]
    for (let i = number.length - 3; i > 0; i -= 3) {
      number.splice(i, 0, ' ')
    }
    number = number.join('')
  }
  return number
}

export default formatNumber
