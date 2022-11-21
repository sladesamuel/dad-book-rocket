const d = (ctx, c, f, s, [sX, sY], ...v) => {
  ctx.beginPath();

  if (c) ctx.fillStyle = c;

  ctx.moveTo(sX, sY);
  v.map(([x, y]) => ctx.lineTo(x, y));

  if (f) ctx.fill();
  if (s) ctx.stroke();
};

var canvas = document.getElementById("canvas");
if (canvas.getContext) {
  const ctx = canvas.getContext("2d");
  ctx.lineWidth = 5;
  ctx.strokeStyle = "black";

  d(ctx, "#CC1100", true, true, [710, 150], [920, 150], [765, 280]);
  d(ctx, null, false, true, [390, 260], [710, 150], [765, 280], [450, 400], [390, 260]);
  d(ctx, "#CC1100", true, true, [470, 230], [440, 150], [600, 187]);
  d(ctx, "#CC1100", true, true, [520, 375], [550, 450], [650, 325]);
  d(ctx, "#CB0C09", true, false, [390, 260], [230, 280], [350, 310], [220, 390], [370, 380], [320, 470], [450, 400]);
  d(ctx, "#F9C73F", true, false, [407, 300], [350, 350], [432, 360]);

  ctx.beginPath();
  ctx.fillStyle = "#6FCFF5";
  ctx.arc(630, 255, 50, 0, Math.PI * 2);
  ctx.fill();
  ctx.stroke();
}
