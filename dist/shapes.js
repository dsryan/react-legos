const one = [
  [1]
]

const oneByTwo = [
  [1],
  [1]
]

const oneByFour = [
  [1],
  [1],
  [1],
  [1]
]

const twoByTwo = [
  [1,1],
  [1,1]
]

const twoByFour = [
  [1,1],
  [1,1],
  [1,1],
  [1,1]
]

const b = [
  [1,1,0,0,0,0],
  [1,1,0,0,0,0],
  [1,1,0,0,0,0],
  [1,1,1,1,1,1],
  [1,1,0,0,1,1],
  [1,1,0,0,1,1],
  [1,1,1,1,1,1],
  [1,1,1,1,1,1]
].reverse()

const r = [
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,0,0,0],
  [1,1,0,0,0],
  [1,1,0,0,0],
  [1,1,0,0,0]
].reverse()

const y = [
  [1,1,0,0,1,1],
  [1,1,0,0,1,1],
  [1,1,0,0,1,1],
  [1,1,1,1,1,1],
  [0,0,0,0,1,1],
  [0,0,0,0,1,1],
  [1,1,1,1,1,1],
  [1,1,1,1,1,1]
].reverse()

const c = [
  [1,1,1,1,1],
  [1,1,1,1,1],
  [1,1,0,0,0],
  [1,1,0,0,0],
  [1,1,1,1,1],
  [1,1,1,1,1],
].reverse()

const e = [
  [1,1,1,1,1],
  [1,0,0,0,1],
  [1,1,1,1,1],
  [1,1,0,0,0],
  [1,1,1,1,1],
  [1,1,1,1,1],
].reverse()

const bricks = {
  one,
  oneByTwo,
  oneByFour,
  twoByTwo,
  twoByFour
}

const letters = {
  b,
  r,
  y,
  c,
  e
}

export {
  bricks,
  letters
}