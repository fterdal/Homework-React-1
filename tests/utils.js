export const valueOf = reactWrapper => {
  if (reactWrapper.get(0).props.value) return reactWrapper.get(0).props.value
  return reactWrapper.text()
}

export const findButton = (wrapper, text) => {
  return wrapper.findWhere(node => {
    return node.type() === "button" && node.text() === text
  })
}

export const findSinglePet = (wrapper, petName) => {
  return wrapper.findWhere(node => {
    return node.hasClass("single-pet") && node.text().includes(petName)
  })
}
