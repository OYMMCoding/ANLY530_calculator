$(document).ready(function () {
    let currentInput = ""; // Stores the current input for display
    let operatorClicked = false; // Prevents multiple operators in a row

    // Append values to the displaY
    $(".button").not(".operator, .clear, .equal").on("click", function () {
        const value = $(this).data("value");
        currentInput += value;
        $("#display").val(currentInput);
    });

    // Handle operators
    $(".operator").on("click", function () {
        const value = $(this).data("value");
        if (!operatorClicked) {
            currentInput += value;
            $("#display").val(currentInput);
            operatorClicked = true;
        }
    });

    // Handle equal button
    $(".equal").on("click", function () {
        try {
            currentInput = eval(currentInput); // Safely evaluate the string
            $("#display").val(currentInput);
        } catch (error) {
            $("#display").val("Error");
            currentInput = "";
        }
        operatorClicked = false;
    });

    // Clear the display
    $(".clear").on("click", function () {
        currentInput = "";
        $("#display").val("");
        operatorClicked = false;
    });

    // Add button animation on click
    $(".button").on("click", function () {
        $(this).addClass("active");
        setTimeout(() => {
            $(this).removeClass("active");
        }, 150);
    });
});
