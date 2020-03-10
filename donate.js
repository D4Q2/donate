   // A function to take us to the donate page
   function donateAnimalsPage()
   {
     // Code to take us to the donate page
     window.open('https://d4q2.github.io/donateanimals');
   }

   // And the same thing for the host drive page
   function hostDrivePage()
   {
     window.open('https://d4q2.github.io/hostdrive');
   }

   // And for the home page
   function homePage()
   {
     window.open('https://d4q2.github.io/home');
   }

   // And for the settings page
   function settingsPage()
   {
     window.open('https://d4q2.github.io/settings');
   }

   // And for the donate money page
   function donateMoneyPage()
   {
     window.open('https://d4q2.github.io/donatemoney');
   }



   let menuBool = false;

   function openMenu()
   {
     menuBool = menuBool ? false : true;


     if (menuBool == true)
     {
       var menu = document.getElementById("menu");

       // Create a button (in this case it will be the home button)
       var homeButton = document.createElement("BUTTON");

        // Change the innerHTML to a sensible set of text (in this case home)
        homeButton.innerHTML = "Home";

        // Change the class to the class for menu buttons and the id to homeButton so we can access it 
        // easier and it can assume previously defined css values
        homeButton.setAttribute("class", "menuButton");
        homeButton.setAttribute("id", "homeButton");

        // Change the onclick value to what we want (in this case a function to take us  to the donate page)
        homeButton.onclick = homePage;

        // Append donateButton to the menu <div>
        menu.appendChild(homeButton);

        // Move it into the perfect position
        homeButton.style.transform = "translateX(-10px)";


        // And the same thing for the settings button
        var settingsButton = document.createElement("BUTTON");
        settingsButton.innerHTML = "Settings";
        settingsButton.setAttribute("class", "menuButton");
        settingsButton.setAttribute("id", "settingsButton");
        menu.appendChild(settingsButton);
        settingsButton.style.transform = "translateX(-20px)";
        settingsButton.onclick = settingsPage;
     }

     else
     {
       // Clear our menu div
       document.getElementById("menu").innerHTML = "";

       // Get variable for menu div and make variable for our new openMenu button
       var menu = document.getElementById("menu");
       var menuOpener = document.createElement("BUTTON");
 
       // Specify qualities for our openMenu button
       menuOpener.innerHTML = "Menu";
       menuOpener.setAttribute("class", "openMenu");
       menuOpener.setAttribute("id", "menuOpener");
       menuOpener.onclick = openMenu;

       // Append it to the menu div
       menu.appendChild(menuOpener);
     }
   }
