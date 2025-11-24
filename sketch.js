let sprite20, sprite30;

// 角色 1 (20.png) 的原始數據
let w20 = 515, h20 = 88;
let frames20 = 5;
let fw20, fh20; // 單格原始寬高

// 角色 2 (30.png) 的原始數據
let w30 = 1267, h30 = 211;
let frames30 = 8;
let fw30, fh30; // 單格原始寬高

// *** 新增：設定統一的顯示大小 ***
let displayWidth = 200;  // 想要顯示的寬度
let displayHeight = 200; // 想要顯示的高度

let animationSpeed = 8;

function preload() {
  sprite20 = loadImage('1/20.png');
  sprite30 = loadImage('2/30.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
  // 計算原始單格寬高 (用來從大圖中裁切)
  fw20 = w20 / frames20;
  fh20 = h20;
  
  fw30 = w30 / frames30;
  fh30 = h30;
  
  imageMode(CENTER);
}

function draw() {
  background('#bde0fe');

  // --- 角色 1 (左邊) ---
  let currentFrame20 = floor(frameCount / animationSpeed) % frames20;
  let sx20 = currentFrame20 * fw20;
  
  // 將角色 1 放在中心點往左 150 的位置
  image(
    sprite20,
    width / 2 - 150, height / 2,  // 顯示位置 (X, Y)
    displayWidth, displayHeight,  // *** 這裡強制設定為 200x200 ***
    sx20, 0, fw20, fh20           // 原始圖片裁切區域
  );

  // --- 角色 2 (右邊，鏡像) ---
  let currentFrame30 = floor(frameCount / animationSpeed) % frames30;
  let sx30 = currentFrame30 * fw30;

  push();
    // 將角色 2 放在中心點往右 150 的位置
    translate(width / 2 + 150, height / 2);
    scale(-1, 1); // 左右翻轉
    
    image(
      sprite30,
      0, 0,                         // 因為已經 translate，這裡設為 0,0
      displayWidth, displayHeight,  // *** 這裡也強制設定為 200x200 ***
      sx30, 0, fw30, fh30           // 原始圖片裁切區域
    );
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}