//1===========================
function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  'Вы согласны?',
  () => console.log('Вы согласились.'),
  () => console.log('Вы отменили выполнение.'),
);