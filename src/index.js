import * as odd from "@oddjs/odd"

  ; (async () => {
    const config = { namespace: "bundler-test" }

    const crypto = await odd.defaultCryptoComponent(config)
    const manners = odd.defaultMannersComponent(config)
    const storage = odd.defaultStorageComponent(config)

    const depot = await odd.defaultDepotComponent({ storage }, config)
    const reference = await odd.defaultReferenceComponent({ crypto, manners, storage })

    const fs = await odd.FileSystem.empty({
      account: { rootDID: await odd.did.agent(crypto) },
      dependencies: { crypto, depot, manners, reference, storage },
      localOnly: true
    })

    const privatePath = odd.path.file(
      odd.path.RootBranch.Private,
      "testing",
      "write.txt"
    )

    const publicPath = odd.path.directory(
      odd.path.RootBranch.Public,
      "testing",
      "nested"
    )

    await fs.write(privatePath, "contents")
    const contents = await fs.read(privatePath)

    console.log(contents)
    console.log(await fs.ls(odd.path.parent(privatePath)))

    await fs.mkdir(publicPath)

    console.log(await fs.ls(odd.path.parent(publicPath)))
  })()