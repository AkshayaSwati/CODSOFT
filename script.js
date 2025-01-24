function toggleMenu() {
    const sideMenu = document.getElementById("sidebar");
    const mainContent = document.getElementById("content");

    // Toggle the width of the side menu
    if (sideMenu.style.width === "250px") {
        sideMenu.style.width = "0";
        mainContent.style.marginLeft = "0";
    } else {
        sideMenu.style.width = "250px"; // Set the width when menu is open
        mainContent.style.marginLeft = "250px"; // Push main content to the right
    }
}
