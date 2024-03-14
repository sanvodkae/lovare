export const generateID = (length: number) => {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length))
  }
  return result
}

export const readableNumber = (num: number) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export const msToDate = (ms: number) => {
  // should output 1 hora / 1 hora e 30 minutos / 2 duas e 1 minuto, etc
  const seconds = Math.floor(ms / 1000)
  const minutes = Math.floor(seconds / 60)
  const hours = Math.floor(minutes / 60)

  const hourWord = hours === 1 ? 'hora' : 'horas'
  const minuteWord = minutes === 1 ? 'minuto' : 'minutos'
  const secondWord = seconds === 1 ? 'segundo' : 'segundos'
  if (hours > 0) {
    const remainingMinutes = minutes - hours * 60
    if (remainingMinutes > 0) {
      return `${hours} ${hourWord} e ${remainingMinutes} ${minuteWord}`
    }

    return `${hours} ${hourWord}`
  }

  if (minutes > 0) {
    const remainingSeconds = seconds - minutes * 60
    if (remainingSeconds > 0) {
      return `${minutes} ${minuteWord} e ${remainingSeconds} ${secondWord}`
    }

    return `${minutes} ${minuteWord}`
  }

  return `${seconds} ${secondWord}`
}
