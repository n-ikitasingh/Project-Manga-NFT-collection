//Manga NFT collection

//Array to hold collection of mangaNFTs
let mangaNFTs = [];

//Function to create new manga NFT & addind it to mangaNFTs array
function mintMangaNFT(title, totalVolumes, creator, releaseYear, genre, demographic) 
{
    const mangaNFT = {
        title: title,
        totalVolumes: totalVolumes,
        creator: creator,
        releaseYear: releaseYear,
        genre: genre,
        demographic: demographic
    };
    mangaNFTs.push(mangaNFT);
}

//Fuction to display all mangaNFT from collection(mangaNFTs array)
function listMangaNFTs()
{
    for (let i = 0; i < mangaNFTs.length; i++)
    {
        console.log("#Manga NFT:",i+1);
        console.log("Title:",mangaNFTs[i].title);
        console.log("Total Volumes:",mangaNFTs[i].totalVolumes);
        console.log("Creator:",mangaNFTs[i].creator);
        console.log("Release Year:",mangaNFTs[i].releaseYear);
        console.log("Genre:",mangaNFTs[i].genre);
        console.log("Demographic:",mangaNFTs[i].demographic);
        console.log('---------------------------');
    }
}

//Function to return the total number of mangaNFT from collection
function getTotalMangaNFTs()
{
    return mangaNFTs.length;
}

//Fuction calling-->
//Adding some mangaNFT to the collection
mintMangaNFT("One Piece",107,"Eiichiro Oda",1997,"Adventure","Shonen");
mintMangaNFT("Naruto",72,"Masashi Kishimoto",1999,"Action","Shonen");
mintMangaNFT("Attack on Titan",34,"Hajime Isayama",2009,"Dark Fantasy","Shonen");
mintMangaNFT("Demon Slayer",23,"Koyoharu Gotouge",2016,"Dark Fantasy","Shonen");
mintMangaNFT("Death Note",12,"Tsugumi Ohba",2003,"Mystery","Shonen");
mintMangaNFT("Doraemon",45,"Fujiko F. Fujio",1969,"Comedy,Science Fiction","Children");
mintMangaNFT("Pokemon",64,"Satoshi Tajiri",1997,"Adventure","Shonen");
mintMangaNFT("Shinchan",50,"Yoshito Usui",1990,"Comedy","Seinen");

//Displaying the List of all mangaNFT
listMangaNFTs();

//Total number of mangaNFTs
console.log("Total Manga NFTs:",getTotalMangaNFTs());
