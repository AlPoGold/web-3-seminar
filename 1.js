let celsium = Number.parseInt(prompt('Пожалуйста, введите температуру в градусах Цельсия'));
function farengeit(cels_degree) {
    farengeit_degree = Math.round((9 / 5 * cels_degree + 32) * 100) / 100;
    alert(`Ваша температура ${cels_degree} по Цельсию в градусах по Фаренгейту ${farengeit_degree}`);
    alert(`Celsium: ${cels_degree}\nFarengeit: ${farengeit_degree}`);
}
farengeit(celsium);