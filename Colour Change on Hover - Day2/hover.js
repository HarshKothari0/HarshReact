const box1 = document.getElementById('box1');

box1.addEventListener('mouseover', function handleMouseOver() {
  box1.style.color = 'red';
});

box1.addEventListener('mouseout', function handleMouseOut() {
  box1.style.color = 'black';
});

const box2 = document.getElementById('box2');

box2.addEventListener('mouseover', function handleMouseOver() {
  box2.style.color = 'red';
});

box2.addEventListener('mouseout', function handleMouseOut() {
  box2.style.color = 'black';
});