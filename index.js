const { Revise } = require("revise-sdk");
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjUzMDgxZGUxLTczZmEtNDljMS1iMmJjLTU3N2JiMzU4NTc0NyIsImtleSI6ImpqNTZwZTB0IiwiaWF0IjoxNjcwMDM0ODI5fQ.Y_UKPq_XMmQmBxHWFCG8ax_wP_1D4-_MmlYhthj1dQ8";
const revise = new Revise({auth: AUTH_TOKEN});

async function run() {

    const collection = await revise.addCollection({
        name: "gitnft",
        uri: "gitnftcollection",
      });
    
    
      const nft = await revise.addNFT(
        {
          image:
            "https://revise-testing.fra1.digitaloceanspaces.com/sample-collection/1.jpg",
          name: "STAR CORD",
          tokenId: "1",
          description: "What's special about dynamic NFT's is that we can change its state in which revise is helpful, hopefully will use it in future",
        },
        [{ attack: "80" }, { color: "maroon" }, { stamina: "90" }],
        collection.id
      );
    
      console.log(nft);
}
run()
