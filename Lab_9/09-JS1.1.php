<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $product = $_POST['product'];
    $material = $_POST['material'];
    $quantity = $_POST['quantity'];
    echo "<h2>Ваше замовлення прийнято</h2>";
    echo "<p>Замовлено виріб: " . $product . "</p>";
    echo "<p>Матеріал: " . $material . "</p>";
    echo "<p>Кількість: " . $quantity . "</p>";
}
?>
