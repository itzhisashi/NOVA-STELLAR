// --- Event Data (JSON Format) ---
const eventsData = {
    "food": {
        title: "Food Fest",
        icon: "ph-duotone ph-bowl-food",
        items: [
            {
                name: "Fete",
                time: "10:30 AM - 3:30 PM",
                venue: "A - Ground Floor",
                day: "Day 1",
                description: "Enjoy a vibrant food fest featuring a wide variety of delicious cuisines. Students will be putting up exciting food stalls with street food, desserts, and refreshing beverages. Don't miss out on the culinary delights!",
                teachers: "Dr. Purabi Bhattacharyya, Mr. Shubham Singh",
                students: "Krish Patra",
                isSpecial: false
            }
        ]
    },
    "literary": {
        title: "Literary & Arts",
        icon: "ph-duotone ph-books",
        items: [
            {
                name: "Debate Competition",
                time: "10:00 AM - 2:00 PM",
                venue: "Auditorium",
                day: "Day 1",
                description: "A battle of wits and eloquence! Participants will engage in structured debates on pressing contemporary issues. Show off your oratorical skills and logical reasoning in front of our esteemed judging panel.",
                teachers: "Mrs. Soma Banerjee, Mrs. Baljeet Mudliyar",
                students: "Aryan Tiwari",
                isSpecial: false
            },
            {
                name: "Face Painting",
                time: "11:00 AM - 12:00 PM",
                venue: "Seminar Hall",
                day: "Day 1",
                description: "Transform faces into living canvases. Participants will be given a theme on the spot to showcase their artistic skills and creativity using skin-safe paints.",
                teachers: "Ms. Shruti Chourasia",
                students: "Rajveer Nageshwar",
                isSpecial: false
            },
            {
                name: "Pencil Sketching",
                time: "11:00 AM - 12:00 PM",
                venue: "Room B 112",
                day: "Day 1",
                description: "Capture the world in shades of grey. A live sketching competition where participants will draw based on a specific prompt, focusing on shading, proportion, and artistic interpretation.",
                teachers: "Mrs. Rashmi Kale Koche & Team",
                students: "Swayam Nagrale",
                isSpecial: false
            },
            {
                name: "Poster Making",
                time: "11:00 AM - 12:00 PM",
                venue: "Room B 111",
                day: "Day 1",
                description: "Combine art with a powerful message. Teams will create visually striking posters on themes provided by the judges, promoting social awareness and creative design.",
                teachers: "Mrs. Rashmi Kale Koche & Team",
                students: "Swayam Nagrale",
                isSpecial: false
            }
        ]
    },
    "annual": {
        title: "College Annual Day",
        icon: "ph-duotone ph-users-three",
        items: [
            {
                name: "Grand Opening Performances",
                time: "5:00 PM - 6:30 PM",
                venue: "College Ground",
                day: "Day 2",
                description: "The official inauguration of the cultural night. This segment features a spectacular blend of classical and contemporary performances, including welcome dances, speeches, and the lighting of the lamp.",
                teachers: "Dr. Dileep Sadhankar",
                students: "Krish Patra",
                isSpecial: false
            }
        ]
    },
    "night": {
        title: "Night Events",
        icon: "ph-duotone ph-moon-stars",
        items: [
            {
                name: "Instrumental / Live Band",
                time: "6:30 PM - 7:15 PM",
                venue: "College Ground",
                day: "Day 2",
                description: "Feel the rhythm! The stage opens with powerful live band performances and instrumental solos ranging from rock to classical fusion.",
                teachers: "Dr. Sachin Burde, Dr. Rajkumari Yadav",
                students: "Aryan Tiwari",
                isSpecial: false
            },
            {
                name: "Singing (Solo / Group)",
                time: "7:15 PM - 8:00 PM",
                venue: "College Ground",
                day: "Day 2",
                description: "Melodies that will move you. Witness the best vocal talents of SFS College as they perform solo acts and harmonized group songs across various genres.",
                teachers: "Prof. Susan John, Ms. Itika Lakkewar",
                students: "Aryan Tiwari",
                isSpecial: false
            },
            {
                name: "Dance (Solo / Group)",
                time: "8:00 PM - 8:45 PM",
                venue: "College Ground",
                day: "Day 2",
                description: "High energy and perfect synchronization. Watch jaw-dropping dance routines, including hip-hop, contemporary, and traditional styles.",
                teachers: "Ms. Reshma Quazi, Mr. Anuj Kamble",
                students: "Krish Patra",
                isSpecial: false
            },
            {
                name: "Fashion Show Finale",
                time: "8:45 PM - 9:00 PM",
                venue: "College Ground",
                day: "Day 2",
                description: "The crown jewel of Nova Stellar. A dazzling runway show featuring spectacular student-designed outfits based on themes like Mythical Legends, Time Travel Fashion, and Met Gala.",
                teachers: "Mr. Shubham Singh, Dr. Mary Louis",
                students: "Swayam Nagrale, Rajveer Nageshwar",
                isSpecial: true // This flag gives the item the special gold styling!
            }
        ]
    }
};

// --- Dynamic Modal Logic ---
function openModal(category) {
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('dynamic-modal');
    const titleEl = document.getElementById('modal-title');
    const iconEl = document.getElementById('modal-icon');
    const listEl = document.getElementById('modal-event-list');
    
    // Get the data for the requested category
    const data = eventsData[category];
    if (!data) return;

    // Set Header
    titleEl.innerText = data.title;
    iconEl.className = `${data.icon} text-4xl text-brand-gold-light`;
    
    // Clear old list
    listEl.innerHTML = '';

    // Build the list items dynamically
    data.items.forEach(item => {
        let li = document.createElement('li');
        
        if (item.isSpecial) {
            // Special Gold Styling (For Fashion Show)
            li.className = "p-4 sm:p-5 border border-brand-gold bg-gradient-to-r from-[#1a1405] to-[#2a220b] rounded-xl space-y-3 shadow-[0_0_20px_rgba(212,175,55,0.1)]";
            li.innerHTML = `
                <div class="flex justify-between items-start gap-2">
                    <div>
                        <span class="font-bold text-brand-gold-light text-xl block flex items-center gap-2"><i class="ph-fill ph-star"></i> ${item.name}</span>
                        <span class="text-xs text-brand-gold-light flex items-center gap-1 mt-1"><i class="ph-fill ph-clock"></i> ${item.time} | <i class="ph-fill ph-map-pin"></i> ${item.venue}</span>
                    </div>
                    <span class="text-[10px] text-black bg-brand-gold-light px-2 py-1 rounded uppercase font-bold tracking-wider shrink-0">${item.day}</span>
                </div>
                <p class="text-sm text-gray-300 leading-relaxed">${item.description}</p>
                <div class="grid grid-cols-2 gap-3 text-xs border-t border-brand-gold/30 pt-3 mt-2">
                    <div>
                        <span class="text-brand-gold/70 block mb-0.5 uppercase tracking-wider text-[9px]">Teacher Coordinators</span>
                        <span class="text-brand-gold-light">${item.teachers}</span>
                    </div>
                    <div>
                        <span class="text-brand-gold/70 block mb-0.5 uppercase tracking-wider text-[9px]">Student Coordinators</span>
                        <span class="text-brand-gold-light">${item.students}</span>
                    </div>
                </div>
            `;
        } else {
            // Standard Styling
            li.className = "p-4 sm:p-5 bg-black/60 rounded-xl border border-gray-800 space-y-3 hover:border-brand-gold/30 transition-colors";
            li.innerHTML = `
                <div class="flex justify-between items-start gap-2">
                    <div>
                        <span class="font-bold text-white text-lg block">${item.name}</span>
                        <span class="text-xs text-brand-gold flex items-center gap-1 mt-1"><i class="ph-fill ph-clock"></i> ${item.time} | <i class="ph-fill ph-map-pin"></i> ${item.venue}</span>
                    </div>
                    <span class="text-[10px] text-brand-gold bg-brand-gold/10 px-2 py-1 rounded uppercase font-bold tracking-wider shrink-0">${item.day}</span>
                </div>
                <p class="text-sm text-gray-400 leading-relaxed">${item.description}</p>
                <div class="grid grid-cols-2 gap-3 text-xs border-t border-gray-800/80 pt-3 mt-2">
                    <div>
                        <span class="text-gray-500 block mb-0.5 uppercase tracking-wider text-[9px]">Teacher Coordinators</span>
                        <span class="text-gray-300">${item.teachers}</span>
                    </div>
                    <div>
                        <span class="text-gray-500 block mb-0.5 uppercase tracking-wider text-[9px]">Student Coordinator</span>
                        <span class="text-gray-300">${item.students}</span>
                    </div>
                </div>
            `;
        }
        listEl.appendChild(li);
    });

    // Show the modal
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden');
    
    // Animation trigger
    setTimeout(() => {
        overlay.classList.remove('opacity-0');
        modal.classList.replace('scale-95', 'scale-100');
    }, 10);
}

function closeModal() {
    const overlay = document.getElementById('modal-overlay');
    const modal = document.getElementById('dynamic-modal');
    
    overlay.classList.add('opacity-0');
    modal.classList.replace('scale-100', 'scale-95');
    
    setTimeout(() => {
        overlay.classList.add('hidden');
        modal.classList.add('hidden');
        document.body.classList.remove('overflow-hidden');
    }, 300);
}

document.getElementById('modal-overlay').addEventListener('click', function(e) {
    if (e.target === this) {
        closeModal();
    }
});

