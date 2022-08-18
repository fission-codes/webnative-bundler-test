import * as wn from "webnative"

;(async () => {
  const fs = await wn.fs.empty({ localOnly: true })
  const privatePath = wn.path.file(
    wn.path.Branch.Private,
    "testing",
    "write.txt"
  )

  const publicPath = wn.path.directory(
    wn.path.Branch.Public,
    "testing",
    "nested"
  )

  await fs.write(privatePath, "contents")
  const contents = await fs.read(privatePath)

  console.log(contents)
  console.log(await fs.ls(wn.path.parent(privatePath)))

  await fs.mkdir(publicPath)

  console.log(await fs.ls(wn.path.parent(publicPath)))
})()