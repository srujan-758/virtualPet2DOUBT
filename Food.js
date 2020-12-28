class Food{
  constructor(){
    this.image = loadImage("images/Milk.png");
  }

  getFoodStock(){
    var FoodStockRef = database.ref('FoodStock');
    FoodStockRef.on("value",function(data){
    FoodStock = data.val();
    })
  }

  updateFoodStock(count){
    database.ref('/').update({
    FoodStock: count
    });
  }

  deductFoodStock(){

  }

  display(){
   var x=80, y=100; 
   
   imageMode(CENTER);
   image(this.image,20,180,40,40);

   if(this.foodStock!=0){
      for (var i=0;i<this.foodStock;i++){
         if(i%10==0){
           x=80;
           y=y+50;  
         } 
         image(this.image,x,y,40,40); 
         x=x+30;
      } 
   }
   
  }
  drawSprites();
}