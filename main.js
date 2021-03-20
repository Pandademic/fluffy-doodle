var Names=["Mom","Eira","me","dad"];
var images=["https://octocat-generator-assets.githubusercontent.com/my-octocat-1616281340177.png","https://octocat-generator-assets.githubusercontent.com/my-octocat-1616281158532.png","https://octocat-generator-assets.githubusercontent.com/my-octocat-1616283161371.png","https://octocat-generator-assets.githubusercontent.com/my-octocat-1616280978107.png"];
var i =0;
var EndImage="https://t4.ftcdn.net/jpg/02/89/21/71/360_F_289217190_NoYt60DRoBMGHogYPN5At6wTGq46Wa8k.jpg"
function nextSlide() {document.getElementById("Member-name").innerHTML=Names[i];
                     document.getElementById("videoFeed").src=images[i];
                     console.log("next Image")
                     console.log("new image="+Names[i])
                     i++;
                    
                   }