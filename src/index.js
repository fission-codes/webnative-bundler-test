import * as wn from "webnative"

  ; (async () => {
    const config = { namespace: "bundler-test" }

    const crypto = await wn.defaultCryptoComponent(config)
    const manners = wn.defaultMannersComponent(config)
    const storage = wn.defaultStorageComponent(config)

    const depot = await wn.defaultDepotComponent({ storage }, config)
    const reference = await wn.defaultReferenceComponent({ crypto, manners, storage })

    const fs = await wn.FileSystem.empty({
      account: { rootDID: await wn.did.agent(crypto) },
      dependencies: { crypto, depot, manners, reference, storage },
      localOnly: true
    })

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