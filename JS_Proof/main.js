/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFTs = [];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, weight, rarity, value) {
    let nft = {
        name: name,
        weight: weight,
        rarity: rarity,
        value: value
    }

    NFTs.push(nft);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    console.log("--- List of NFTs ---")
    for (let i = 0; i < NFTs.length; i++){
        console.log("\n");
        console.log(`NFT #${i}`);
        console.log(`Name : ${NFTs[i].name}`)
        console.log(`Weight : ${NFTs[i].weight}`)
        console.log(`Rarity : ${NFTs[i].rarity}`)
        console.log(`Value : ${NFTs[i].value}`)
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    return NFTs.length;
}

// call your functions below this line
mintNFT('Heavy Mace', 10000, 'UNIQUE', 50000)
mintNFT('Diamont Sword', 256, 'EPIC', 7500)
mintNFT('Dragon Wings', 20, 'UNIQUE', 45000)
mintNFT('Soul Crown', 50, 'EXCLUSIVE', 20000)

console.log(`Total NFTs : ${NFTs.length}`)

listNFTs()

