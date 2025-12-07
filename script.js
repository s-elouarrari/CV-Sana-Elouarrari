document.addEventListener('DOMContentLoaded', function() {
    const skillItems = document.querySelectorAll('.skill-item');
    const projectItems = document.querySelectorAll('.project-item');

    skillItems.forEach(skillItem => {
        const techToHighlight = skillItem.getAttribute('data-tech'); 

        if (techToHighlight) {
            
            skillItem.addEventListener('mouseenter', () => {
                skillItem.classList.add('is-active');

                projectItems.forEach(projectItem => {
                    if (projectItem.classList.contains(`tech-${techToHighlight}`)) {
                        projectItem.classList.add('is-highlighted');
                    }
                });
            });

            skillItem.addEventListener('mouseleave', () => {
                skillItem.classList.remove('is-active');

                projectItems.forEach(projectItem => {
                    projectItem.classList.remove('is-highlighted');
                });
            });
        }
    });
});