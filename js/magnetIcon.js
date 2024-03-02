const icons = document.querySelectorAll('.icons');
const leftPartUpper = document.getElementById('leftPartUpper')



    icons.forEach(icon => {
        const img = icon.querySelector('img');
        const iconRect = icon.getBoundingClientRect(); // Get the bounding rectangle of the icon div

        icon.addEventListener("mousemove", function(event) {
            const offsetX = iconRect.left + icon.clientWidth / 2; // Calculate the horizontal center of the icon
            const offsetY = iconRect.top + icon.clientHeight / 2; // Calculate the vertical center of the icon
            const mouseX = event.clientX - offsetX; // Calculate the mouse position relative to the center of the icon
            const mouseY = event.clientY - offsetY;

            // Ensure the icon stays within the bounds of its containing div
            const minX = -icon.clientWidth / 2;
            const minY = -icon.clientHeight / 2;
            const maxX = icon.clientWidth / 2;
            const maxY = icon.clientHeight / 2;

            const boundedX = Math.min(Math.max(mouseX, minX), maxX);
            const boundedY = Math.min(Math.max(mouseY, minY), maxY);

            img.style.transform = `translate(${boundedX}px, ${boundedY}px)`;
        });

        icon.addEventListener("mouseleave", function(event) {
            img.style.transform = ''; // Reset transform to its original position
        });

        leftPartUpper.addEventListener('mouseenter', ()=>{
            cursor.classList.add('biggerCursor')
        })
        leftPartUpper.addEventListener('mouseleave', ()=>{
            cursor.classList.remove('biggerCursor')
        })

    });

    

