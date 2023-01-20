import express from "express";

const app = express();

app.use(express.json());
app.use(express.static("public"));

const waifu = {
    judul: "WAIFU",
    pengertian1:"WAIFU (plural waifu or waifus) (fandom slang, Internet slang)", 
    pengertian2:"A fictional female character from non-live-action visual media",
    pengertian3:"(typically an anime, manga, or video game) to whom one is romantically",
    pengertian4:"attracted and/or whom one considers their significant other.",
};
app.get("/api/waifu/get", (_req, res) => {
    res.send(waifu);
})

app.listen(3000 ,()=>{
    console.log("lagi jalan!!");
});