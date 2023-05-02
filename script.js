
/*Moving list*/

function createMovingList(){
 
  const root = document.getElementById ("root");
  const listArray =[ "Carve-able Snacks","Low to No Added Sugar","Low Cholesterol","Keto-Friendly","Low Sodium","Nutrient Dense"]
  
  const animLine = document.createElement("div");
  animLine.className="animLine";
  const movingList= document.createElement("ul");
  movingList.className="movingUl";
  
  for (let i = 0; i < listArray.length; i++) {
    const listElement = document.createElement("li");
    listElement.innerText= listArray[i];
  
    movingList.append(listElement);
  }
  animLine.append(movingList);
  root.append(animLine);
  
  }
  
  createMovingList();

  /*Third part of the page*/
  function createOrangePlantImg(){


    return plantImgDiv;
  }

  function createThirdPart(){
    const root = document.getElementById ("root");

    const thirdPart = document.createElement("div");
    thirdPart.className="thirdPart";

    const title = document.createElement("h1");
    title.innerText=`Why Choose Earthside Farms?`;

    const containerDiv = document.createElement("div");
    containerDiv.className= "containerDiv";

    const firstCol= document.createElement("div");
    firstCol.className="firstCol";
    const secondCol= document.createElement("div");
    secondCol.className="secondCol";
    const thirdCol= document.createElement("div");
    thirdCol.className="thirdCol";




    const plantBased= document.createElement("div");
    const plantBasedText = document.createElement("p");
    plantBasedText.innerText="Plant Based";
    const plantImg1 = new Image();
    plantImg1.className="plantImg";
    plantImg1.src="orangeplant.png";
    const plantImgDiv = document.createElement("div");
    plantImgDiv.className="plantImgDiv";
    plantImgDiv.append(plantImg1);
    plantBased.append(plantImgDiv,plantBasedText);
    
    const lowChol = document.createElement("div");
    const lowCholText = document.createElement("p");
    lowCholText.innerText="Low To No Cholesterol";
    const plantImg2 = new Image();
    plantImg2.className="plantImg";
    plantImg2.src="orangeplant.png";
    const plantImgDiv2 = document.createElement("div");
    plantImgDiv2.className="plantImgDiv";
    plantImgDiv2.append(plantImg2);
    lowChol.append(plantImgDiv2,lowCholText);
    
    const lowCarb = document.createElement("div"); 
    const lowCarbText = document.createElement("p");
    lowCarbText.innerText="Low Sugar, Carbs, & Sodium";
    const plantImg3 = new Image();
    plantImg3.className="plantImg";
    plantImg3.src="orangeplant.png";
    const plantImgDiv3 = document.createElement("div");
    plantImgDiv3.className="plantImgDiv";
    plantImgDiv3.append(plantImg3);
    lowCarb.append(plantImgDiv3,lowCarbText);
   
    const ketoFr = document.createElement("div");
    const ketoFrText = document.createElement("p");
    ketoFrText.innerText="Keto Friendly";
    const plantImg4 = new Image();
    plantImg4.className="plantImg";
    plantImg4.src="orangeplant.png";
    const plantImgDiv4 = document.createElement("div");
    plantImgDiv4.className="plantImgDiv";
    plantImgDiv4.append(plantImg4);
    ketoFr.append(plantImgDiv4,ketoFrText)



    thirdPart.append(title,containerDiv);
    containerDiv.append(firstCol,secondCol,thirdCol);
    firstCol.append(plantBased,lowChol);
    thirdCol.append(lowCarb,ketoFr);

    root.append(thirdPart);

  }

  createThirdPart();