<<<<<<< HEAD
// ================================
// CAREERSEEKHO WEBSITE JAVASCRIPT
// ================================

// MOBILE MENU
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav-links");

if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("mobile-active");

    const icon = menuBtn.querySelector("i");

    if (navLinks.classList.contains("mobile-active")) {
      icon.classList.remove("fa-bars");
      icon.classList.add("fa-xmark");
    } else {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
}


// CLOSE MOBILE MENU AFTER CLICKING A LINK
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach((item) => {
  item.addEventListener("click", () => {
    if (navLinks) {
      navLinks.classList.remove("mobile-active");
    }

    const icon = menuBtn?.querySelector("i");

    if (icon) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  });
});


// ACTIVE NAVIGATION LINK ON SCROLL
const sections = document.querySelectorAll("main section[id]");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 150;
    const sectionHeight = section.offsetHeight;

    if (
      window.scrollY >= sectionTop &&
      window.scrollY < sectionTop + sectionHeight
    ) {
      currentSection = section.getAttribute("id");
    }
  });

  navItems.forEach((item) => {
    item.classList.remove("active");

    const href = item.getAttribute("href");

    if (href === `#${currentSection}`) {
      item.classList.add("active");
    }
  });
});


// NAVBAR SHADOW ON SCROLL
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
  if (navbar) {
    if (window.scrollY > 20) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }
});


// SCROLL REVEAL ANIMATION
const revealElements = document.querySelectorAll(
  ".topic-card, .video-card, .section-heading, .alku-section"
);

revealElements.forEach((element) => {
  element.classList.add("reveal");
});

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 80) {
      element.classList.add("show");
    }
  });
};

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// OPTIONAL: SMOOTH SCROLL FOR INTERNAL LINKS
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetId = link.getAttribute("href");

    if (targetId === "#") return;

    const target = document.querySelector(targetId);

    if (target) {
      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});
=======
"use strict";

/* ============================================================
   BHARATBUDDY AI
   COMPLETE FRONTEND SCRIPT
   ============================================================ */


/* ============================================================
   STORAGE
   ============================================================ */

const STORAGE_KEY = "bharatbuddy_data";


/* ============================================================
   COMPLETE CLASS 11 STUDY DATA
   ============================================================ */

const lessonData = {

    Physics: {

        "Units & Measurements": [

            {
                title: "Introduction to Units and Measurements",
                content: `
                    <h3>Introduction</h3>

                    <p>
                        Physics deals with physical quantities such as length,
                        mass, time, velocity, force and energy. To compare these
                        quantities properly, we need standard units.
                    </p>

                    <h3>Physical Quantity</h3>

                    <p>
                        A physical quantity is a quantity that can be measured
                        and expressed using a numerical value and a unit.
                    </p>

                    <p><strong>Example:</strong> 5 metre, 10 kilogram, 20 second.</p>

                    <h3>SI System</h3>

                    <p>
                        The International System of Units is called SI.
                        It provides standard units used throughout science.
                    </p>

                    <ul>
                        <li>Length → metre (m)</li>
                        <li>Mass → kilogram (kg)</li>
                        <li>Time → second (s)</li>
                        <li>Electric current → ampere (A)</li>
                        <li>Temperature → kelvin (K)</li>
                        <li>Amount of substance → mole (mol)</li>
                        <li>Luminous intensity → candela (cd)</li>
                    </ul>

                    <h3>Important Idea</h3>

                    <p>
                        A measurement always contains uncertainty because no
                        physical instrument can measure a quantity with
                        absolutely unlimited precision.
                    </p>

                    <h3>Quick Example</h3>

                    <p>
                        If a ruler measures a length as 12.5 cm, then
                        <strong>12.5</strong> is the numerical value and
                        <strong>cm</strong> is the unit.
                    </p>
                `
            },

            {
                title: "Significant Figures",
                content: `
                    <h3>What are Significant Figures?</h3>

                    <p>
                        Significant figures are the meaningful digits in a
                        measured quantity. They indicate the precision of a
                        measurement.
                    </p>

                    <h3>Basic Rules</h3>

                    <ul>
                        <li>All non-zero digits are significant.</li>
                        <li>Zeros between non-zero digits are significant.</li>
                        <li>Leading zeros are generally not significant.</li>
                        <li>Zeros after a decimal can be significant depending on notation.</li>
                    </ul>

                    <h3>Example</h3>

                    <p>
                        2.35 has three significant figures.
                    </p>

                    <p>
                        0.0045 has two significant figures.
                    </p>

                    <p>
                        105 has three significant figures because the zero
                        lies between non-zero digits.
                    </p>

                    <h3>Why are they important?</h3>

                    <p>
                        Significant figures help us report experimental
                        measurements without suggesting false precision.
                    </p>
                `
            },

            {
                title: "Errors in Measurement",
                content: `
                    <h3>Measurement Error</h3>

                    <p>
                        The difference between a measured value and the
                        accepted or true value is called measurement error.
                    </p>

                    <h3>Types of Errors</h3>

                    <ul>
                        <li>Systematic errors</li>
                        <li>Random errors</li>
                        <li>Instrumental errors</li>
                        <li>Personal or observational errors</li>
                    </ul>

                    <h3>Absolute Error</h3>

                    <p>
                        Absolute error represents the magnitude of the
                        difference between a measured value and the accepted
                        value.
                    </p>

                    <h3>Percentage Error</h3>

                    <p>
                        Percentage error gives the error relative to the
                        measured quantity and expresses it as a percentage.
                    </p>

                    <h3>Important</h3>

                    <p>
                        Good experimental practice attempts to reduce errors,
                        but measurement uncertainty can never be completely
                        eliminated.
                    </p>
                `
            }

        ],


        "Motion in a Straight Line": [

            {
                title: "Introduction to Motion",
                content: `
                    <h3>What is Motion?</h3>

                    <p>
                        An object is said to be in motion if its position
                        changes with time relative to a reference point.
                    </p>

                    <h3>Rest and Motion</h3>

                    <p>
                        Rest and motion are relative concepts. An object can
                        be at rest relative to one observer and moving relative
                        to another.
                    </p>

                    <h3>Position</h3>

                    <p>
                        Position tells us where an object is located relative
                        to a chosen reference point.
                    </p>

                    <h3>Distance</h3>

                    <p>
                        Distance is the total path length travelled by an
                        object. It is a scalar quantity.
                    </p>

                    <h3>Displacement</h3>

                    <p>
                        Displacement is the change in position of an object.
                        It is a vector quantity.
                    </p>

                    <p>
                        Magnitude of displacement can never be greater than
                        distance travelled.
                    </p>
                `
            },

            {
                title: "Speed and Velocity",
                content: `
                    <h3>Speed</h3>

                    <p>
                        Speed is the distance travelled per unit time.
                    </p>

                    <p><strong>Average Speed = Total Distance / Total Time</strong></p>

                    <h3>Velocity</h3>

                    <p>
                        Velocity is displacement per unit time.
                        Since displacement has direction, velocity is a vector.
                    </p>

                    <p><strong>Average Velocity = Total Displacement / Total Time</strong></p>

                    <h3>Difference</h3>

                    <ul>
                        <li>Speed is scalar.</li>
                        <li>Velocity is vector.</li>
                        <li>Speed depends on distance.</li>
                        <li>Velocity depends on displacement.</li>
                    </ul>

                    <h3>Example</h3>

                    <p>
                        If a student walks 100 m east in 20 s, average speed
                        is 5 m/s and average velocity is also 5 m/s east.
                    </p>
                `
            },

            {
                title: "Acceleration and Equations of Motion",
                content: `
                    <h3>Acceleration</h3>

                    <p>
                        Acceleration is the rate of change of velocity with time.
                    </p>

                    <p>
                        <strong>a = (v - u) / t</strong>
                    </p>

                    <p>
                        Here u is initial velocity, v is final velocity and
                        t is time.
                    </p>

                    <h3>Equations of Uniformly Accelerated Motion</h3>

                    <p><strong>v = u + at</strong></p>

                    <p><strong>s = ut + 1/2 at²</strong></p>

                    <p><strong>v² = u² + 2as</strong></p>

                    <h3>Example</h3>

                    <p>
                        If a body starts from rest and accelerates uniformly,
                        then u = 0. Therefore the equations become simpler.
                    </p>

                    <h3>Important</h3>

                    <p>
                        Always choose a positive direction before solving
                        one-dimensional motion problems.
                    </p>
                `
            }

        ],


        "Laws of Motion": [

            {
                title: "Force and Inertia",
                content: `
                    <h3>Force</h3>

                    <p>
                        Force is an interaction that can change the state of
                        motion of an object or deform it.
                    </p>

                    <h3>Inertia</h3>

                    <p>
                        Inertia is the tendency of an object to resist changes
                        in its state of rest or motion.
                    </p>

                    <p>
                        Greater mass means greater inertia.
                    </p>

                    <h3>Types of Inertia</h3>

                    <ul>
                        <li>Inertia of rest</li>
                        <li>Inertia of motion</li>
                        <li>Inertia of direction</li>
                    </ul>
                `
            },

            {
                title: "Newton's Laws of Motion",
                content: `
                    <h3>First Law</h3>

                    <p>
                        An object remains at rest or continues moving with
                        uniform velocity unless an external unbalanced force
                        acts on it.
                    </p>

                    <h3>Second Law</h3>

                    <p>
                        The net force acting on an object is related to its
                        rate of change of momentum. For constant mass:
                    </p>

                    <p><strong>F = ma</strong></p>

                    <h3>Third Law</h3>

                    <p>
                        Forces occur in pairs. When one body exerts a force on
                        another, the second body exerts an equal-magnitude,
                        opposite-direction force on the first.
                    </p>

                    <h3>Example</h3>

                    <p>
                        When you push a wall, the wall exerts a force back on
                        you.
                    </p>
                `
            },

            {
                title: "Friction",
                content: `
                    <h3>What is Friction?</h3>

                    <p>
                        Friction is a force that opposes relative motion or
                        the tendency of relative motion between surfaces.
                    </p>

                    <h3>Types</h3>

                    <ul>
                        <li>Static friction</li>
                        <li>Kinetic friction</li>
                        <li>Rolling friction</li>
                    </ul>

                    <h3>Advantages</h3>

                    <p>
                        Friction allows us to walk, write and grip objects.
                    </p>

                    <h3>Disadvantages</h3>

                    <p>
                        Friction causes energy loss and wear of machine parts.
                    </p>
                `
            }

        ],


        "Work, Energy and Power": [

            {
                title: "Work",
                content: `
                    <h3>Work</h3>

                    <p>
                        In physics, work is done when a force causes
                        displacement of an object.
                    </p>

                    <p>
                        For a constant force:
                    </p>

                    <p><strong>W = F s cos θ</strong></p>

                    <p>
                        where θ is the angle between force and displacement.
                    </p>

                    <h3>Special Cases</h3>

                    <ul>
                        <li>θ = 0° → maximum positive work</li>
                        <li>θ = 90° → zero work</li>
                        <li>θ = 180° → negative work</li>
                    </ul>
                `
            },

            {
                title: "Kinetic and Potential Energy",
                content: `
                    <h3>Kinetic Energy</h3>

                    <p>
                        Energy possessed by an object due to its motion is
                        kinetic energy.
                    </p>

                    <p><strong>K.E. = 1/2 mv²</strong></p>

                    <h3>Potential Energy</h3>

                    <p>
                        Energy associated with position or configuration is
                        potential energy.
                    </p>

                    <p>
                        Near Earth's surface:
                    </p>

                    <p><strong>P.E. = mgh</strong></p>

                    <h3>Conservation of Energy</h3>

                    <p>
                        Energy can change from one form to another, but the
                        total energy of an isolated system remains conserved.
                    </p>
                `
            },

            {
                title: "Power",
                content: `
                    <h3>Power</h3>

                    <p>
                        Power measures how quickly work is done or energy is
                        transferred.
                    </p>

                    <p><strong>Power = Work / Time</strong></p>

                    <p>
                        SI unit of power is watt.
                    </p>

                    <h3>Example</h3>

                    <p>
                        Two machines may perform the same amount of work, but
                        the machine that completes it in less time has greater
                        power.
                    </p>
                `
            }

        ]

    },


    Mathematics: {

        "Sets": [

            {
                title: "Introduction to Sets",
                content: `
                    <h3>What is a Set?</h3>

                    <p>
                        A set is a well-defined collection of distinct objects.
                        The objects are called elements or members.
                    </p>

                    <p>
                        Example: A = {1, 2, 3, 4}
                    </p>

                    <h3>Representation</h3>

                    <p>
                        Sets can be represented using roster form or
                        set-builder form.
                    </p>

                    <h3>Important Terms</h3>

                    <ul>
                        <li>Empty set</li>
                        <li>Finite set</li>
                        <li>Infinite set</li>
                        <li>Subset</li>
                        <li>Universal set</li>
                    </ul>
                `
            },

            {
                title: "Operations on Sets",
                content: `
                    <h3>Union</h3>

                    <p>
                        A ∪ B contains elements belonging to A or B or both.
                    </p>

                    <h3>Intersection</h3>

                    <p>
                        A ∩ B contains elements common to A and B.
                    </p>

                    <h3>Difference</h3>

                    <p>
                        A - B contains elements belonging to A but not B.
                    </p>

                    <h3>Complement</h3>

                    <p>
                        Complement of A contains elements in the universal
                        set that are not in A.
                    </p>
                `
            }

        ],


        "Relations and Functions": [

            {
                title: "Introduction to Relations",
                content: `
                    <h3>Ordered Pair</h3>

                    <p>
                        An ordered pair is written as (a,b). The order of
                        elements is important.
                    </p>

                    <h3>Cartesian Product</h3>

                    <p>
                        The Cartesian product A × B is the set of all ordered
                        pairs (a,b), where a belongs to A and b belongs to B.
                    </p>

                    <h3>Relation</h3>

                    <p>
                        A relation from A to B is a subset of A × B.
                    </p>
                `
            },

            {
                title: "Functions",
                content: `
                    <h3>Function</h3>

                    <p>
                        A function from A to B assigns every element of A to
                        exactly one element of B.
                    </p>

                    <h3>Domain</h3>

                    <p>
                        The set of input values is called the domain.
                    </p>

                    <h3>Range</h3>

                    <p>
                        The actual output values are called the range.
                    </p>

                    <h3>Example</h3>

                    <p>
                        If f(x) = x², then every allowed input x gets one
                        output x².
                    </p>
                `
            }

        ],


        "Trigonometric Functions": [

            {
                title: "Angles and Trigonometric Ratios",
                content: `
                    <h3>Trigonometry</h3>

                    <p>
                        Trigonometry studies relationships between angles and
                        sides of triangles.
                    </p>

                    <h3>Basic Ratios</h3>

                    <p><strong>sin θ = Perpendicular / Hypotenuse</strong></p>
                    <p><strong>cos θ = Base / Hypotenuse</strong></p>
                    <p><strong>tan θ = Perpendicular / Base</strong></p>

                    <h3>Important Identity</h3>

                    <p><strong>sin²θ + cos²θ = 1</strong></p>

                    <p>
                        Trigonometric ratios are also defined for angles beyond
                        a right triangle using the coordinate system.
                    </p>
                `
            },

            {
                title: "Trigonometric Identities",
                content: `
                    <h3>Important Identities</h3>

                    <p><strong>sin²θ + cos²θ = 1</strong></p>

                    <p><strong>1 + tan²θ = sec²θ</strong></p>

                    <p><strong>1 + cot²θ = cosec²θ</strong></p>

                    <h3>Use</h3>

                    <p>
                        Identities are used to simplify expressions and solve
                        trigonometric equations.
                    </p>

                    <h3>Study Tip</h3>

                    <p>
                        Learn identities conceptually and practice converting
                        everything into sine and cosine when necessary.
                    </p>
                `
            }

        ],


        "Complex Numbers": [

            {
                title: "Introduction to Complex Numbers",
                content: `
                    <h3>Why Complex Numbers?</h3>

                    <p>
                        Some algebraic equations do not have solutions among
                        real numbers. Complex numbers extend the number system
                        so such equations can be handled.
                    </p>

                    <h3>Imaginary Unit</h3>

                    <p>
                        The imaginary unit i is defined by:
                    </p>

                    <p><strong>i² = -1</strong></p>

                    <h3>General Form</h3>

                    <p>
                        A complex number is written as:
                    </p>

                    <p><strong>z = a + ib</strong></p>

                    <p>
                        where a and b are real numbers.
                    </p>
                `
            },

            {
                title: "Algebra of Complex Numbers",
                content: `
                    <h3>Addition</h3>

                    <p>
                        Add real parts separately and imaginary parts
                        separately.
                    </p>

                    <h3>Multiplication</h3>

                    <p>
                        Multiply using algebraic expansion and use i² = -1.
                    </p>

                    <h3>Conjugate</h3>

                    <p>
                        The conjugate of a + ib is a - ib.
                    </p>

                    <h3>Modulus</h3>

                    <p>
                        The modulus of a + ib is √(a² + b²).
                    </p>
                `
            }

        ]

    },


    Chemistry: {

        "Some Basic Concepts of Chemistry": [

            {
                title: "Matter and Its Classification",
                content: `
                    <h3>Matter</h3>

                    <p>
                        Matter is anything that has mass and occupies space.
                    </p>

                    <h3>States of Matter</h3>

                    <ul>
                        <li>Solid</li>
                        <li>Liquid</li>
                        <li>Gas</li>
                    </ul>

                    <h3>Classification</h3>

                    <p>
                        Matter can be classified as pure substances and
                        mixtures.
                    </p>

                    <p>
                        Elements and compounds are pure substances, while
                        mixtures contain two or more substances physically
                        combined.
                    </p>
                `
            },

            {
                title: "Mole Concept",
                content: `
                    <h3>Mole</h3>

                    <p>
                        A mole is a counting unit used for very large numbers
                        of particles.
                    </p>

                    <p>
                        One mole contains approximately
                        6.022 × 10²³ particles.
                    </p>

                    <h3>Important Relation</h3>

                    <p>
                        Number of moles = Given mass / Molar mass
                    </p>

                    <h3>Example</h3>

                    <p>
                        If a substance has molar mass M and mass m, then its
                        amount in moles is m/M.
                    </p>
                `
            },

            {
                title: "Atomic and Molecular Mass",
                content: `
                    <h3>Atomic Mass</h3>

                    <p>
                        Atomic mass represents the relative mass of an atom
                        compared with a standard reference.
                    </p>

                    <h3>Molecular Mass</h3>

                    <p>
                        Molecular mass is obtained by adding the atomic masses
                        of all atoms present in a molecule.
                    </p>

                    <h3>Example</h3>

                    <p>
                        For water, H₂O, molecular mass is obtained from two
                        hydrogen atoms and one oxygen atom.
                    </p>
                `
            }

        ],


        "Structure of Atom": [

            {
                title: "Fundamental Particles",
                content: `
                    <h3>Subatomic Particles</h3>

                    <ul>
                        <li>Electron</li>
                        <li>Proton</li>
                        <li>Neutron</li>
                    </ul>

                    <p>
                        Electrons carry negative charge, protons carry positive
                        charge and neutrons have no net electric charge.
                    </p>

                    <h3>Atomic Nucleus</h3>

                    <p>
                        The nucleus contains protons and neutrons and carries
                        most of the mass of an atom.
                    </p>
                `
            },

            {
                title: "Bohr Model and Atomic Structure",
                content: `
                    <h3>Bohr Model</h3>

                    <p>
                        Bohr proposed that electrons occupy certain allowed
                        energy levels around the nucleus.
                    </p>

                    <h3>Energy Levels</h3>

                    <p>
                        Electrons can absorb or release energy when they move
                        between allowed energy states.
                    </p>

                    <h3>Limitation</h3>

                    <p>
                        The simple Bohr model is useful for introductory
                        understanding but cannot completely describe complex
                        multi-electron atoms.
                    </p>
                `
            }

        ],


        "Chemical Bonding": [

            {
                title: "Why Chemical Bonds Form",
                content: `
                    <h3>Chemical Bond</h3>

                    <p>
                        A chemical bond is an attractive interaction that holds
                        atoms or ions together.
                    </p>

                    <h3>Valence Electrons</h3>

                    <p>
                        Electrons in the outermost shell play an important role
                        in chemical bonding.
                    </p>

                    <h3>Stability</h3>

                    <p>
                        Atoms often form bonds to reach a more stable electronic
                        arrangement.
                    </p>
                `
            },

            {
                title: "Ionic and Covalent Bonds",
                content: `
                    <h3>Ionic Bond</h3>

                    <p>
                        An ionic bond forms through electrostatic attraction
                        between oppositely charged ions, commonly after electron
                        transfer.
                    </p>

                    <h3>Covalent Bond</h3>

                    <p>
                        A covalent bond involves sharing of electron pairs
                        between atoms.
                    </p>

                    <h3>Example</h3>

                    <p>
                        In a simple covalent molecule, atoms share electrons
                        to form stable bonding arrangements.
                    </p>
                `
            }

        ]

    },


    "Computer Science": {

        "Computer Fundamentals": [

            {
                title: "What is a Computer?",
                content: `
                    <h3>Computer</h3>

                    <p>
                        A computer is an electronic programmable machine that
                        accepts data, processes it according to instructions
                        and produces information.
                    </p>

                    <h3>Basic Cycle</h3>

                    <p>
                        Input → Processing → Output
                    </p>

                    <h3>Characteristics</h3>

                    <ul>
                        <li>Speed</li>
                        <li>Accuracy</li>
                        <li>Storage</li>
                        <li>Automation</li>
                        <li>Consistency</li>
                    </ul>
                `
            },

            {
                title: "Hardware and Software",
                content: `
                    <h3>Hardware</h3>

                    <p>
                        Hardware means the physical components of a computer.
                    </p>

                    <p>
                        Examples include keyboard, monitor, processor and
                        storage devices.
                    </p>

                    <h3>Software</h3>

                    <p>
                        Software is a collection of instructions that tells
                        hardware what to do.
                    </p>

                    <h3>Types</h3>

                    <ul>
                        <li>System software</li>
                        <li>Application software</li>
                    </ul>
                `
            }

        ],


        "Programming Basics": [

            {
                title: "Introduction to Programming",
                content: `
                    <h3>Programming</h3>

                    <p>
                        Programming is the process of creating instructions
                        that a computer can execute.
                    </p>

                    <h3>Algorithm</h3>

                    <p>
                        An algorithm is a step-by-step procedure for solving a
                        problem.
                    </p>

                    <h3>Example</h3>

                    <p>
                        To calculate the average of two numbers:
                    </p>

                    <ol>
                        <li>Take the first number.</li>
                        <li>Take the second number.</li>
                        <li>Add them.</li>
                        <li>Divide by two.</li>
                        <li>Display the result.</li>
                    </ol>
                `
            },

            {
                title: "Variables and Data Types",
                content: `
                    <h3>Variable</h3>

                    <p>
                        A variable is a named location used to store a value.
                    </p>

                    <h3>Common Data Types</h3>

                    <ul>
                        <li>Integer</li>
                        <li>Floating-point number</li>
                        <li>String</li>
                        <li>Boolean</li>
                    </ul>

                    <h3>Example in JavaScript</h3>

                    <p>
                        A variable can store a student's name, marks or a
                        true/false value.
                    </p>
                `
            },

            {
                title: "Conditional Statements",
                content: `
                    <h3>Decision Making</h3>

                    <p>
                        Programs often need to make decisions based on
                        conditions.
                    </p>

                    <h3>if Statement</h3>

                    <p>
                        An if statement executes code when a condition is true.
                    </p>

                    <h3>else</h3>

                    <p>
                        else provides an alternative block when the condition
                        is false.
                    </p>

                    <h3>Example</h3>

                    <p>
                        A program can check whether marks are greater than or
                        equal to a passing threshold.
                    </p>
                `
            }

        ],


        "Web Development": [

            {
                title: "HTML Basics",
                content: `
                    <h3>HTML</h3>

                    <p>
                        HTML stands for HyperText Markup Language. It provides
                        the structure of a web page.
                    </p>

                    <h3>Common Elements</h3>

                    <ul>
                        <li>h1 for headings</li>
                        <li>p for paragraphs</li>
                        <li>a for links</li>
                        <li>img for images</li>
                        <li>button for buttons</li>
                    </ul>

                    <h3>Basic Structure</h3>

                    <p>
                        A normal HTML document contains html, head and body
                        sections.
                    </p>
                `
            },

            {
                title: "CSS Basics",
                content: `
                    <h3>CSS</h3>

                    <p>
                        CSS stands for Cascading Style Sheets. It controls the
                        appearance and layout of web pages.
                    </p>

                    <h3>CSS Can Control</h3>

                    <ul>
                        <li>Colors</li>
                        <li>Spacing</li>
                        <li>Fonts</li>
                        <li>Layout</li>
                        <li>Responsive design</li>
                    </ul>
                `
            },

            {
                title: "JavaScript Basics",
                content: `
                    <h3>JavaScript</h3>

                    <p>
                        JavaScript adds logic and interactivity to websites.
                    </p>

                    <h3>Examples</h3>

                    <ul>
                        <li>Button click handling</li>
                        <li>Form validation</li>
                        <li>Dynamic content</li>
                        <li>API requests</li>
                    </ul>

                    <p>
                        BharatBuddy's Coding Lab uses HTML, CSS and JavaScript
                        together to create interactive projects.
                    </p>
                `
            }

        ]

    },


    English: {

        "Grammar": [

            {
                title: "Parts of Speech",
                content: `
                    <h3>What are Parts of Speech?</h3>

                    <p>
                        Parts of speech classify words according to the role
                        they play in a sentence.
                    </p>

                    <ul>
                        <li>Noun</li>
                        <li>Pronoun</li>
                        <li>Verb</li>
                        <li>Adjective</li>
                        <li>Adverb</li>
                        <li>Preposition</li>
                        <li>Conjunction</li>
                        <li>Interjection</li>
                    </ul>

                    <h3>Example</h3>

                    <p>
                        In the sentence "Rahul runs quickly", Rahul is a noun,
                        runs is a verb and quickly is an adverb.
                    </p>
                `
            },

            {
                title: "Tenses",
                content: `
                    <h3>What is Tense?</h3>

                    <p>
                        Tense shows the time of an action or state.
                    </p>

                    <h3>Three Basic Tenses</h3>

                    <ul>
                        <li>Present</li>
                        <li>Past</li>
                        <li>Future</li>
                    </ul>

                    <h3>Example</h3>

                    <p>
                        Present: I study.
                    </p>

                    <p>
                        Past: I studied.
                    </p>

                    <p>
                        Future: I will study.
                    </p>
                `
            },

            {
                title: "Sentence Formation",
                content: `
                    <h3>Basic Sentence Structure</h3>

                    <p>
                        A simple English sentence often follows:
                    </p>

                    <p><strong>Subject + Verb + Object</strong></p>

                    <p>
                        Example: "The student reads a book."
                    </p>

                    <h3>Good Writing</h3>

                    <p>
                        A clear sentence should communicate one understandable
                        idea and use appropriate grammar and punctuation.
                    </p>
                `
            }

        ],


        "Vocabulary": [

            {
                title: "Everyday Vocabulary",
                content: `
                    <h3>Useful Words</h3>

                    <ul>
                        <li>Improve → become better</li>
                        <li>Accurate → correct</li>
                        <li>Explore → learn about something</li>
                        <li>Achieve → successfully reach a goal</li>
                        <li>Confident → sure about yourself</li>
                    </ul>

                    <h3>Practice</h3>

                    <p>
                        Try using each new word in your own sentence. Creating
                        personal examples makes vocabulary easier to remember.
                    </p>
                `
            },

            {
                title: "Synonyms and Antonyms",
                content: `
                    <h3>Synonyms</h3>

                    <p>
                        Synonyms are words with similar meanings.
                    </p>

                    <p>
                        Example: happy and joyful.
                    </p>

                    <h3>Antonyms</h3>

                    <p>
                        Antonyms have opposite meanings.
                    </p>

                    <p>
                        Example: hot and cold.
                    </p>
                `
            }

        ]

    }

};


/* ============================================================
   CHAPTER EXERCISES
   ============================================================ */

const chapterQuestions = {

    "Physics|Units & Measurements": [

        {
            type: "MCQ",
            question: "Which is the SI unit of length?",
            options: ["Kilometre", "Metre", "Centimetre", "Millimetre"],
            answer: 1
        },

        {
            type: "MCQ",
            question: "Which quantity is measured in seconds?",
            options: ["Mass", "Length", "Time", "Force"],
            answer: 2
        },

        {
            type: "SHORT",
            question: "What is a physical quantity?",
            answer:
                "A physical quantity is a measurable quantity that can be expressed using a numerical value and a unit."
        },

        {
            type: "SHORT",
            question: "Why are standard units important?",
            answer:
                "Standard units allow measurements to be compared consistently by different people and instruments."
        },

        {
            type: "LONG",
            question: "Explain significant figures and their importance.",
            answer:
                "Significant figures are meaningful digits in a measurement. They communicate the precision of the measurement and prevent reporting more precision than the measuring process supports."
        }

    ],


    "Physics|Motion in a Straight Line": [

        {
            type: "MCQ",
            question: "Which quantity is a vector?",
            options: ["Distance", "Speed", "Time", "Displacement"],
            answer: 3
        },

        {
            type: "MCQ",
            question: "Average speed is calculated using:",
            options: [
                "Displacement / time",
                "Distance / time",
                "Force / time",
                "Velocity / distance"
            ],
            answer: 1
        },

        {
            type: "SHORT",
            question: "Define acceleration.",
            answer:
                "Acceleration is the rate of change of velocity with time."
        },

        {
            type: "SHORT",
            question: "Write the first equation of uniformly accelerated motion.",
            answer:
                "v = u + at"
        },

        {
            type: "LONG",
            question: "Differentiate between distance and displacement.",
            answer:
                "Distance is the total path travelled and is a scalar quantity. Displacement is the change in position and is a vector quantity with direction."
        }

    ],


    "Physics|Laws of Motion": [

        {
            type: "MCQ",
            question: "Newton's second law is commonly written as:",
            options: ["F = ma", "P = VI", "W = Fs", "v = u + at"],
            answer: 0
        },

        {
            type: "MCQ",
            question: "Inertia depends mainly on:",
            options: ["Mass", "Colour", "Temperature only", "Shape only"],
            answer: 0
        },

        {
            type: "SHORT",
            question: "What is inertia?",
            answer:
                "Inertia is the tendency of an object to resist changes in its state of rest or motion."
        },

        {
            type: "SHORT",
            question: "State Newton's third law in your own words.",
            answer:
                "When one body exerts a force on another body, the second body exerts an equal-magnitude force in the opposite direction on the first."
        },

        {
            type: "LONG",
            question: "Explain Newton's three laws of motion.",
            answer:
                "Newton's first law describes inertia, the second relates net force to acceleration, and the third describes force pairs between interacting bodies."
        }

    ],


    "Mathematics|Sets": [

        {
            type: "MCQ",
            question: "A set is a collection of:",
            options: [
                "Undefined objects",
                "Well-defined objects",
                "Only numbers",
                "Only symbols"
            ],
            answer: 1
        },

        {
            type: "MCQ",
            question: "A ∩ B represents:",
            options: [
                "Union",
                "Difference",
                "Intersection",
                "Complement"
            ],
            answer: 2
        },

        {
            type: "SHORT",
            question: "Define a subset.",
            answer:
                "A is a subset of B if every element of A is also an element of B."
        },

        {
            type: "SHORT",
            question: "What is an empty set?",
            answer:
                "An empty set is a set containing no elements."
        },

        {
            type: "LONG",
            question: "Explain union and intersection of two sets.",
            answer:
                "Union contains elements belonging to either set or both, while intersection contains only elements common to both sets."
        }

    ],


    "Mathematics|Relations and Functions": [

        {
            type: "MCQ",
            question: "A function assigns every input to:",
            options: [
                "Exactly one output",
                "At least two outputs",
                "No output",
                "Any number of outputs"
            ],
            answer: 0
        },

        {
            type: "MCQ",
            question: "The set of input values is called:",
            options: ["Range", "Domain", "Codomain", "Image"],
            answer: 1
        },

        {
            type: "SHORT",
            question: "What is a Cartesian product?",
            answer:
                "The Cartesian product A × B is the set of all ordered pairs (a,b) where a belongs to A and b belongs to B."
        },

        {
            type: "SHORT",
            question: "Define a function.",
            answer:
                "A function from A to B assigns every element of A to exactly one element of B."
        },

        {
            type: "LONG",
            question: "Explain domain and range with an example.",
            answer:
                "The domain contains allowed input values and the range contains actual output values produced by the function."
        }

    ],


    "Chemistry|Some Basic Concepts of Chemistry": [

        {
            type: "MCQ",
            question: "One mole contains approximately:",
            options: [
                "6.022 × 10²³ particles",
                "10³ particles",
                "100 particles",
                "6.022 × 10⁶ particles"
            ],
            answer: 0
        },

        {
            type: "MCQ",
            question: "Matter has:",
            options: [
                "Only mass",
                "Only volume",
                "Mass and occupies space",
                "Neither"
            ],
            answer: 2
        },

        {
            type: "SHORT",
            question: "What is a mole?",
            answer:
                "A mole is a counting unit containing approximately 6.022 × 10²³ entities."
        },

        {
            type: "SHORT",
            question: "What is molar mass?",
            answer:
                "Molar mass is the mass of one mole of a substance."
        },

        {
            type: "LONG",
            question: "Explain the mole concept and its importance.",
            answer:
                "The mole connects microscopic particles with measurable laboratory quantities. It allows chemists to calculate amounts of atoms, molecules and ions using mass and molar mass."
        }

    ],


    "Chemistry|Structure of Atom": [

        {
            type: "MCQ",
            question: "Which particle has negative charge?",
            options: ["Proton", "Neutron", "Electron", "Nucleus"],
            answer: 2
        },

        {
            type: "MCQ",
            question: "The nucleus contains:",
            options: [
                "Only electrons",
                "Protons and neutrons",
                "Only neutrons",
                "Only protons"
            ],
            answer: 1
        },

        {
            type: "SHORT",
            question: "Name the three basic subatomic particles.",
            answer:
                "Electron, proton and neutron."
        },

        {
            type: "SHORT",
            question: "What is the role of the nucleus?",
            answer:
                "The nucleus contains protons and neutrons and contains most of the atom's mass."
        },

        {
            type: "LONG",
            question: "Explain the basic idea of the Bohr model.",
            answer:
                "The Bohr model proposes that electrons occupy certain allowed energy levels and can change levels by absorbing or releasing energy."
        }

    ],


    "Computer Science|Computer Fundamentals": [

        {
            type: "MCQ",
            question: "Which is hardware?",
            options: ["Keyboard", "Browser code", "Algorithm", "Variable"],
            answer: 0
        },

        {
            type: "MCQ",
            question: "Which sequence represents the basic computer cycle?",
            options: [
                "Output → Input → Processing",
                "Input → Processing → Output",
                "Processing → Input → Output",
                "Input → Output → Processing"
            ],
            answer: 1
        },

        {
            type: "SHORT",
            question: "What is hardware?",
            answer:
                "Hardware refers to the physical components of a computer system."
        },

        {
            type: "SHORT",
            question: "What is software?",
            answer:
                "Software is a collection of instructions that tells computer hardware what to do."
        },

        {
            type: "LONG",
            question: "Differentiate between hardware and software.",
            answer:
                "Hardware consists of physical components while software consists of programs and instructions executed by the computer."
        }

    ],


    "Computer Science|Programming Basics": [

        {
            type: "MCQ",
            question: "A step-by-step problem-solving procedure is called:",
            options: ["Algorithm", "Monitor", "Compiler only", "Keyboard"],
            answer: 0
        },

        {
            type: "MCQ",
            question: "Which can store a value in a program?",
            options: ["Variable", "Monitor", "Mouse", "Speaker"],
            answer: 0
        },

        {
            type: "SHORT",
            question: "What is programming?",
            answer:
                "Programming is the process of creating instructions that a computer can execute."
        },

        {
            type: "SHORT",
            question: "What is an algorithm?",
            answer:
                "An algorithm is a finite step-by-step procedure used to solve a problem."
        },

        {
            type: "LONG",
            question: "Explain variables and data types.",
            answer:
                "Variables are named storage locations for values. Data types describe the kind of value being stored, such as integer, number, string or boolean."
        }

    ],


    "English|Grammar": [

        {
            type: "MCQ",
            question: "Which word is a verb?",
            options: ["Quickly", "Run", "Beautiful", "Student"],
            answer: 1
        },

        {
            type: "MCQ",
            question: "Which tense refers to an action happening now or generally?",
            options: ["Present", "Past", "Future", "None"],
            answer: 0
        },

        {
            type: "SHORT",
            question: "What is a noun?",
            answer:
                "A noun is a word used to name a person, place, thing or idea."
        },

        {
            type: "SHORT",
            question: "What is a verb?",
            answer:
                "A verb generally expresses an action, occurrence or state."
        },

        {
            type: "LONG",
            question: "Explain the basic parts of speech.",
            answer:
                "Parts of speech classify words by their grammatical role, including nouns, pronouns, verbs, adjectives, adverbs, prepositions, conjunctions and interjections."
        }

    ]

};


/* ============================================================
   DEFAULT DATA
   ============================================================ */

const defaultData = {

    profile: {
        name: "Student",
        className: "Class 11",
        stream: "PCM",
        goal: "Learn, build and grow"
    },

    stats: {
        questions: 0,
        quizzes: 0,
        lessons: 0,
        codingProjects: 0,
        englishSessions: 0
    },

    progress: {
        Physics: 0,
        Mathematics: 0,
        Chemistry: 0,
        Coding: 0,
        English: 0
    },

    lessonProgress: {
        Physics: [],
        Mathematics: [],
        Chemistry: [],
        "Computer Science": [],
        English: []
    },

    chapterTests: {},

    dailyGoal: 3,
    dailyGoalTarget: 5,

    streak: 7,

    chatHistory: [],

    quizHistory: [],

    coding: {
        html:
            "<h1>Hello BharatBuddy 🚀</h1>\n<p>Start building your website.</p>",

        css:
            "body {\n    font-family: Arial;\n    padding: 30px;\n}\n\nh1 {\n    color: #2563eb;\n}",

        js:
            "console.log('BharatBuddy Coding Lab');"
    },

    settings: {
        darkMode: false,
        compactMode: false
    }

};


/* ============================================================
   LOAD DATA
   ============================================================ */

let data;


function loadData() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    STORAGE_KEY
                ) || "null"
            );


        data = {

            ...structuredClone(defaultData),

            ...(saved || {}),

            profile: {
                ...defaultData.profile,
                ...(saved?.profile || {})
            },

            stats: {
                ...defaultData.stats,
                ...(saved?.stats || {})
            },

            progress: {
                ...defaultData.progress,
                ...(saved?.progress || {})
            },

            lessonProgress: {
                ...defaultData.lessonProgress,
                ...(saved?.lessonProgress || {})
            },

            settings: {
                ...defaultData.settings,
                ...(saved?.settings || {})
            },

            coding: {
                ...defaultData.coding,
                ...(saved?.coding || {})
            },

            chapterTests:
                saved?.chapterTests || {},

            chatHistory:
                Array.isArray(saved?.chatHistory)
                    ? saved.chatHistory
                    : [],

            quizHistory:
                Array.isArray(saved?.quizHistory)
                    ? saved.quizHistory
                    : []

        };

    } catch {

        data =
            structuredClone(
                defaultData
            );

    }


    Object.keys(lessonData).forEach(
        subject => {

            if (
                !Array.isArray(
                    data.lessonProgress[subject]
                )
            ) {

                data.lessonProgress[subject] = [];

            }

        }
    );


    ensureStudyProgress();

}


function saveData() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(data)
    );

}


loadData();


/* ============================================================
   DOM
   ============================================================ */

const pageContent =
    document.getElementById(
        "pageContent"
    );

const pageTitle =
    document.getElementById(
        "pageTitle"
    );

const sidebar =
    document.getElementById(
        "sidebar"
    );

const menuBtn =
    document.getElementById(
        "menuBtn"
    );

const overlay =
    document.getElementById(
        "overlay"
    );

const notificationBtn =
    document.getElementById(
        "notificationBtn"
    );

const notificationModal =
    document.getElementById(
        "notificationModal"
    );

const closeNotification =
    document.getElementById(
        "closeNotification"
    );

const toast =
    document.getElementById(
        "toast"
    );


/* ============================================================
   GLOBALS
   ============================================================ */

let activeQuiz = null;

let quizTimer = null;

const QUIZ_TIME = 60;

let currentCodeTab = "html";

let studyState = {

    subject: "Physics",

    chapter: "Units & Measurements",

    lessonIndex: 0

};

let activeChapterTest = null;


/* ============================================================
   HELPERS
   ============================================================ */

function escapeHTML(value) {

    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");

}


function showToast(message) {

    if (!toast) return;

    toast.textContent =
        message;

    toast.classList.add(
        "show"
    );

    setTimeout(
        () => {

            toast.classList.remove(
                "show"
            );

        },
        2500
    );

}


function formatAIText(text) {

    return escapeHTML(
        text
    )
        .replace(
            /\*\*(.*?)\*\*/g,
            "<strong>$1</strong>"
        )
        .replace(
            /\n/g,
            "<br>"
        );

}


function updateProfileUI() {

    const name =
        data.profile.name ||
        "Student";


    const profileName =
        document.getElementById(
            "profileNameTop"
        );


    const profileAvatar =
        document.getElementById(
            "profileAvatar"
        );


    if (profileName) {

        profileName.textContent =
            name;

    }


    if (profileAvatar) {

        profileAvatar.textContent =
            name
                .charAt(0)
                .toUpperCase();

    }

}


function updateStats(
    statName,
    amount = 1
) {

    if (
        typeof data.stats[statName] !==
        "number"
    ) {

        data.stats[statName] = 0;

    }


    data.stats[statName] += amount;


    saveData();

}


function normalizeProgressSubject(
    subject
) {

    if (
        subject ===
        "Computer Science"
    ) {

        return "Coding";

    }


    return subject;

}


function setActiveNav(
    page
) {

    document
        .querySelectorAll(
            "[data-page]"
        )
        .forEach(
            item => {

                item.classList.toggle(
                    "active",
                    item.dataset.page === page
                );

            }
        );

}


function closeSidebar() {

    if (sidebar) {

        sidebar.classList.remove(
            "open"
        );

    }

    if (overlay) {

        overlay.classList.remove(
            "show"
        );

    }

}


function openSidebar() {

    if (sidebar) {

        sidebar.classList.add(
            "open"
        );

    }

    if (overlay) {

        overlay.classList.add(
            "show"
        );

    }

}


/* ============================================================
   NAVIGATION
   ============================================================ */

const pageNames = {

    home: "Home",

    tutor: "AI Tutor",

    study: "Study",

    practice: "Practice",

    coding: "Coding Lab",

    career: "Career",

    english: "English Practice",

    progress: "Progress",

    achievements: "Achievements",

    profile: "Profile",

    settings: "Settings"

};


function openPage(page) {

    setActiveNav(
        page
    );


    closeSidebar();


    if (pageTitle) {

        pageTitle.textContent =
            pageNames[page] ||
            "BharatBuddy";

    }


    switch (page) {

        case "home":
            renderHome();
            break;

        case "tutor":
            renderTutor();
            break;

        case "study":
            renderStudy();
            break;

        case "practice":
            renderPractice();
            break;

        case "coding":
            renderCoding();
            break;

        case "career":
            renderCareer();
            break;

        case "english":
            renderEnglish();
            break;

        case "progress":
            renderProgress();
            break;

        case "achievements":
            renderAchievements();
            break;

        case "profile":
            renderProfile();
            break;

        case "settings":
            renderSettings();
            break;

        default:
            renderHome();

    }

}


/* ============================================================
   NAV EVENTS
   ============================================================ */

document.addEventListener(
    "click",
    event => {

        const target =
            event.target.closest(
                "[data-page]"
            );


        if (!target) return;


        const page =
            target.dataset.page;


        if (page) {

            openPage(
                page
            );

        }

    }
);


if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        openSidebar
    );

}


if (overlay) {

    overlay.addEventListener(
        "click",
        closeSidebar
    );

}


if (notificationBtn) {

    notificationBtn.addEventListener(
        "click",
        () => {

            if (notificationModal) {

                notificationModal.classList.add(
                    "show"
                );

            }

        }
    );

}


if (closeNotification) {

    closeNotification.addEventListener(
        "click",
        () => {

            notificationModal?.classList.remove(
                "show"
            );

        }
    );

}


/* ============================================================
   HOME
   ============================================================ */

function renderHome() {

    const physics =
        data.progress.Physics || 0;

    const math =
        data.progress.Mathematics || 0;

    const chemistry =
        data.progress.Chemistry || 0;


    pageContent.innerHTML = `

        <section class="hero">

            <div>

                <h1>
                    Namaste,
                    ${escapeHTML(
                        data.profile.name
                    )} 👋
                </h1>

                <p>
                    Learn smarter with BharatBuddy AI.
                    Study, practice, code and build your future.
                </p>

                <div class="hero-actions">

                    <button
                        class="hero-btn"
                        data-page="study">

                        📚 Start Studying

                    </button>

                    <button
                        class="hero-btn"
                        data-page="tutor">

                        🤖 Ask AI Tutor

                    </button>

                </div>

            </div>

        </section>


        <div class="ai-box">

            <div class="ai-box-header">

                <div class="ai-icon">
                    🤖
                </div>

                <div>

                    <h3>
                        Ask BharatBuddy AI
                    </h3>

                    <small>
                        Ask doubts, concepts or study questions.
                    </small>

                </div>

            </div>


            <div class="ai-input-row">

                <input
                    id="homeAIInput"
                    class="ai-input"
                    placeholder="Ask anything about your studies..."
                >

                <button
                    class="btn btn-primary"
                    id="homeAISend">

                    Ask

                </button>

            </div>


            <div class="quick-prompts">

                <button
                    class="quick-prompt"
                    data-prompt="Explain Newton's second law simply.">

                    Newton's Law

                </button>

                <button
                    class="quick-prompt"
                    data-prompt="Explain the mole concept with an example.">

                    Mole Concept

                </button>

                <button
                    class="quick-prompt"
                    data-prompt="Teach me JavaScript from beginner level.">

                    JavaScript

                </button>

                <button
                    class="quick-prompt"
                    data-prompt="How can I improve my English speaking?">

                    English

                </button>

            </div>

        </div>


        <div class="feature-grid">

            <div
                class="feature-card"
                data-page="study">

                <div class="feature-icon">
                    📚
                </div>

                <h3>
                    Study
                </h3>

                <p>
                    Textbook-style chapters,
                    lessons and exercises.
                </p>

            </div>


            <div
                class="feature-card"
                data-page="practice">

                <div class="feature-icon">
                    📝
                </div>

                <h3>
                    AI Quiz
                </h3>

                <p>
                    Generate questions and test yourself.
                </p>

            </div>


            <div
                class="feature-card"
                data-page="coding">

                <div class="feature-icon">
                    💻
                </div>

                <h3>
                    Coding Lab
                </h3>

                <p>
                    Build and run HTML, CSS and JavaScript.
                </p>

            </div>


            <div
                class="feature-card"
                data-page="career">

                <div class="feature-icon">
                    🎯
                </div>

                <h3>
                    Career
                </h3>

                <p>
                    Create an AI-powered career roadmap.
                </p>

            </div>

        </div>


        <div class="lower-grid">

            <div class="card">

                <div class="course-top">

                    <div>

                        <h3>
                            📚 Course Progress
                        </h3>

                        <p>
                            Your subject progress
                        </p>

                    </div>

                </div>


                ${courseProgress(
                    "Physics",
                    physics
                )}

                ${courseProgress(
                    "Mathematics",
                    math
                )}

                ${courseProgress(
                    "Chemistry",
                    chemistry
                )}

                ${courseProgress(
                    "Coding",
                    data.progress.Coding || 0
                )}

                ${courseProgress(
                    "English",
                    data.progress.English || 0
                )}

            </div>


            <div class="card">

                <h3>
                    🎯 Daily Goal
                </h3>

                <div class="goal-number">
                    ${data.dailyGoal}
                    /
                    ${data.dailyGoalTarget}
                </div>

                <div class="goal-label">
                    activities today
                </div>

                <div class="goal-progress">

                    ${createGoalDots()}

                </div>

            </div>

        </div>


        <div class="streak-banner">

            <div class="streak-left">

                <div class="streak-icon">
                    🔥
                </div>

                <div>

                    <strong>
                        ${data.streak} day learning streak!
                    </strong>

                    <p>
                        Keep learning every day.
                    </p>

                </div>

            </div>

        </div>

    `;


    attachHomeEvents();

}


function courseProgress(
    subject,
    value
) {

    return `

        <div class="course-item">

            <div class="course-top">

                <strong>
                    ${escapeHTML(subject)}
                </strong>

                <span>
                    ${Number(value) || 0}%
                </span>

            </div>

            <div class="progress">

                <div
                    class="progress-bar"
                    style="width:${Math.min(
                        100,
                        Number(value) || 0
                    )}%">
                </div>

            </div>

        </div>

    `;

}


function createGoalDots() {

    let html = "";

    for (
        let i = 1;
        i <= data.dailyGoalTarget;
        i++
    ) {

        html += `

            <span
                class="goal-dot ${
                    i <= data.dailyGoal
                        ? "done"
                        : ""
                }">
            </span>

        `;

    }

    return html;

}


function attachHomeEvents() {

    const input =
        document.getElementById(
            "homeAIInput"
        );

    const button =
        document.getElementById(
            "homeAISend"
        );


    if (button) {

        button.addEventListener(
            "click",
            askHomeAI
        );

    }


    if (input) {

        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    askHomeAI();

                }

            }
        );

    }


    document
        .querySelectorAll(
            ".quick-prompt"
        )
        .forEach(
            item => {

                item.addEventListener(
                    "click",
                    () => {

                        if (input) {

                            input.value =
                                item.dataset.prompt;

                            input.focus();

                        }

                    }
                );

            }
        );


    document
        .querySelectorAll(
            ".feature-card, .hero-btn"
        )
        .forEach(
            item => {

                item.addEventListener(
                    "click",
                    () => {

                        const page =
                            item.dataset.page;

                        if (page) {

                            openPage(page);

                        }

                    }
                );

            }
        );

}


async function askHomeAI() {

    const input =
        document.getElementById(
            "homeAIInput"
        );

    const button =
        document.getElementById(
            "homeAISend"
        );


    if (!input) return;


    const message =
        input.value.trim();


    if (!message) {

        showToast(
            "Apna question likho."
        );

        return;

    }


    if (button) {

        button.disabled = true;

        button.textContent =
            "Thinking...";

    }


    try {

        const answer =
            await askAI(
                message
            );


        data.chatHistory.push({

            role: "user",

            content: message,

            date:
                new Date().toISOString()

        });


        data.chatHistory.push({

            role: "assistant",

            content: answer,

            date:
                new Date().toISOString()

        });


        data.chatHistory =
            data.chatHistory.slice(
                -100
            );


        updateStats(
            "questions"
        );


        saveData();


        openPage(
            "tutor"
        );


    } catch (error) {

        showToast(
            error.message
        );

    } finally {

        if (button) {

            button.disabled = false;

            button.textContent =
                "Ask";

        }

    }

}


/* ============================================================
   AI API
   ============================================================ */

async function askAI(message) {

    const response =
        await fetch(
            "https://bharatbuddy-ai-36i4.onrender.com/api/chat",
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body:
                    JSON.stringify({
                        message
                    })
            }
        );


    let result = {};


    try {

        result =
            await response.json();

    } catch {

        result = {};

    }


    if (
        response.status ===
        429
    ) {

        throw new Error(
            "⏳ BharatBuddy AI ka free request limit abhi reach ho gaya hai. Thodi der baad dobara try karo."
        );

    }


    if (!response.ok) {

        throw new Error(
            result.error ||
            "BharatBuddy AI temporarily unavailable."
        );

    }


    const answer =
        result.reply ||
        result.answer ||
        result.output_text ||
        "";


    if (!answer) {

        throw new Error(
            "AI ne empty response diya."
        );

    }


    return answer;

}


/* ============================================================
   AI TUTOR
   ============================================================ */

function renderTutor() {

    pageContent.innerHTML = `

        <div class="page-header">

            <h1>
                🤖 AI Tutor
            </h1>

            <p>
                Ask doubts and learn concepts step by step.
            </p>

        </div>


        <div class="chat-container">

            <div
                class="chat-messages"
                id="chatMessages">

            </div>


            <div class="chat-input-area">

                <input
                    id="tutorInput"
                    class="chat-input"
                    placeholder="Ask your doubt..."
                >

                <button
                    id="tutorSend"
                    class="chat-send">

                    ➤

                </button>

            </div>

        </div>

    `;


    renderChatMessages();


    const input =
        document.getElementById(
            "tutorInput"
        );

    const button =
        document.getElementById(
            "tutorSend"
        );


    if (button) {

        button.addEventListener(
            "click",
            sendTutorMessage
        );

    }


    if (input) {

        input.addEventListener(
            "keydown",
            event => {

                if (
                    event.key ===
                    "Enter"
                ) {

                    sendTutorMessage();

                }

            }
        );

    }

}


function renderChatMessages() {

    const container =
        document.getElementById(
            "chatMessages"
        );


    if (!container) return;


    if (
        !data.chatHistory.length
    ) {

        container.innerHTML = `

            <div class="chat-message">

                <div class="chat-avatar">
                    🤖
                </div>

                <div class="chat-bubble">

                    <strong>
                        Namaste! 👋
                    </strong>

                    <p>
                        Main BharatBuddy AI Tutor hoon.
                        Tum apna study doubt pooch sakte ho.
                    </p>

                </div>

            </div>

        `;

        return;

    }


    container.innerHTML =
        data.chatHistory
            .map(
                item => `

                    <div
                        class="chat-message ${
                            item.role === "user"
                                ? "user"
                                : ""
                        }">

                        <div class="chat-avatar">

                            ${
                                item.role === "user"
                                    ? "👤"
                                    : "🤖"
                            }

                        </div>

                        <div class="chat-bubble">

                            ${formatAIText(
                                item.content
                            )}

                        </div>

                    </div>

                `
            )
            .join("");


    container.scrollTop =
        container.scrollHeight;

}


async function sendTutorMessage() {

    const input =
        document.getElementById(
            "tutorInput"
        );

    const button =
        document.getElementById(
            "tutorSend"
        );


    if (!input) return;


    const message =
        input.value.trim();


    if (!message) return;


    input.disabled = true;


    if (button) {

        button.disabled = true;

    }


    data.chatHistory.push({

        role: "user",

        content: message,

        date:
            new Date().toISOString()

    });


    saveData();


    renderChatMessages();


    try {

        const answer =
            await askAI(
                message
            );


        data.chatHistory.push({

            role: "assistant",

            content: answer,

            date:
                new Date().toISOString()

        });


        data.chatHistory =
            data.chatHistory.slice(
                -100
            );


        updateStats(
            "questions"
        );


        saveData();


        renderChatMessages();

    } catch (error) {

        data.chatHistory.push({

            role: "assistant",

            content:
                `❌ ${error.message}`,

            date:
                new Date().toISOString()

        });


        renderChatMessages();

    } finally {

        input.disabled = false;


        if (button) {

            button.disabled = false;

        }


        input.value = "";

        input.focus();

    }

}


/* ============================================================
   STUDY HELPERS
   ============================================================ */

function getAllLessons(
    subject
) {

    const chapters =
        lessonData[subject] || {};


    const lessons = [];


    Object.entries(
        chapters
    )
    .forEach(
        (
            [
                chapter,
                chapterLessons
            ],
            chapterIndex
        ) => {

            chapterLessons.forEach(
                (
                    lesson,
                    lessonIndex
                ) => {

                    lessons.push({

                        id:
                            `${subject}-${chapterIndex}-${lessonIndex}`,

                        subject,

                        chapter,

                        chapterIndex,

                        lessonIndex,

                        title:
                            lesson.title,

                        content:
                            lesson.content

                    });

                }
            );

        }
    );


    return lessons;

}


function getChapterLessons(
    subject,
    chapter
) {

    return (
        lessonData[subject]?.[chapter] ||
        []
    );

}


function calculateLessonProgress(
    subject,
    sourceData = data
) {

    const lessons =
        getAllLessons(
            subject
        );


    if (!lessons.length) {

        return 0;

    }


    const completed =
        Array.isArray(
            sourceData.lessonProgress?.[subject]
        )
            ? sourceData.lessonProgress[subject]
            : [];


    return Math.round(
        (
            completed.filter(
                id =>
                    lessons.some(
                        lesson =>
                            lesson.id === id
                    )
            ).length /
            lessons.length
        ) * 100
    );

}


function ensureStudyProgress() {

    Object.keys(
        lessonData
    )
    .forEach(
        subject => {

            if (
                !Array.isArray(
                    data.lessonProgress[subject]
                )
            ) {

                data.lessonProgress[subject] = [];

            }


            const progress =
                calculateLessonProgress(
                    subject
                );


            const progressSubject =
                normalizeProgressSubject(
                    subject
                );


            if (
                progressSubject in
                data.progress
            ) {

                data.progress[
                    progressSubject
                ] = progress;

            }

        }
    );


    saveData();

}


/* ============================================================
   STUDY PAGE
   ============================================================ */

function renderStudy() {

    ensureStudyProgress();


    const subjects =
        Object.keys(
            lessonData
        );


    if (
        !lessonData[
            studyState.subject
        ]
    ) {

        studyState.subject =
            subjects[0];

    }


    const chapters =
        Object.keys(
            lessonData[
                studyState.subject
            ] || {}
        );


    if (
        !chapters.includes(
            studyState.chapter
        )
    ) {

        studyState.chapter =
            chapters[0];

    }


    const chapterLessons =
        getChapterLessons(
            studyState.subject,
            studyState.chapter
        );


    if (
        studyState.lessonIndex >=
        chapterLessons.length
    ) {

        studyState.lessonIndex = 0;

    }


    const allLessons =
        getAllLessons(
            studyState.subject
        );


    const completed =
        data.lessonProgress[
            studyState.subject
        ] || [];


    const subjectProgress =
        calculateLessonProgress(
            studyState.subject
        );


    pageContent.innerHTML = `

        <div class="page-header">

            <h1>
                📚 Study
            </h1>

            <p>
                Textbook-style learning for your subjects.
            </p>

        </div>


        <div class="grid-3">

            ${subjects
                .map(
                    subject => {

                        const progress =
                            calculateLessonProgress(
                                subject
                            );


                        return `

                            <button
                                class="subject-card"
                                data-subject="${escapeHTML(
                                    subject
                                )}"
                                type="button">

                                <div
                                    style="
                                        font-size:32px;
                                        margin-bottom:10px;
                                    ">

                                    ${
                                        subject === "Physics"
                                            ? "⚡"
                                            : subject === "Mathematics"
                                                ? "📐"
                                                : subject === "Chemistry"
                                                    ? "🧪"
                                                    : subject === "Computer Science"
                                                        ? "💻"
                                                        : "🇬🇧"
                                    }

                                </div>

                                <strong>
                                    ${escapeHTML(
                                        subject
                                    )}
                                </strong>

                                <small>
                                    ${progress}% complete
                                </small>

                            </button>

                        `;

                    }
                )
                .join("")}

        </div>


        <br>


        <div class="card">

            <div class="course-top">

                <div>

                    <h2>
                        ${escapeHTML(
                            studyState.subject
                        )}
                    </h2>

                    <p>
                        Overall course progress
                    </p>

                </div>

                <strong>
                    ${subjectProgress}%
                </strong>

            </div>


            <div class="progress">

                <div
                    class="progress-bar"
                    style="width:${subjectProgress}%">
                </div>

            </div>

        </div>


        <br>


        <div class="card">

            <div class="form-group">

                <label class="form-label">
                    Select Chapter
                </label>

                <select
                    id="studyChapter"
                    class="form-select">

                    ${chapters
                        .map(
                            chapter => `

                                <option
                                    value="${escapeHTML(
                                        chapter
                                    )}"
                                    ${
                                        chapter ===
                                        studyState.chapter
                                            ? "selected"
                                            : ""
                                    }>

                                    ${escapeHTML(
                                        chapter
                                    )}

                                </option>

                            `
                        )
                        .join("")}

                </select>

            </div>


            <div class="grid-2">

                <div>

                    <h3>
                        📖 Chapter Topics
                    </h3>

                    <div
                        style="
                            margin-top:12px;
                            display:flex;
                            flex-direction:column;
                            gap:8px;
                        ">

                        ${chapterLessons
                            .map(
                                (
                                    lesson,
                                    index
                                ) => {

                                    const allLesson =
                                        allLessons.find(
                                            item =>
                                                item.subject ===
                                                    studyState.subject &&
                                                item.chapter ===
                                                    studyState.chapter &&
                                                item.lessonIndex ===
                                                    index
                                        );


                                    const done =
                                        allLesson &&
                                        completed.includes(
                                            allLesson.id
                                        );


                                    return `

                                        <button
                                            type="button"
                                            class="btn ${
                                                index ===
                                                studyState.lessonIndex
                                                    ? "btn-primary"
                                                    : "btn-secondary"
                                            } study-lesson-btn"
                                            data-lesson-index="${index}"
                                            style="text-align:left;">

                                            ${
                                                done
                                                    ? "✅"
                                                    : "📖"
                                            }

                                            ${index + 1}.
                                            ${escapeHTML(
                                                lesson.title
                                            )}

                                        </button>

                                    `;

                                }
                            )
                            .join("")}

                    </div>

                </div>


                <div>

                    <h3>
                        📝 Chapter Exercise
                    </h3>

                    <p
                        style="
                            margin-top:10px;
                            opacity:.75;
                        ">

                        Chapter ke lessons complete karne ke
                        baad textbook-style questions attempt karo.

                    </p>

                    <button
                        class="btn btn-primary"
                        id="chapterTestButton"
                        style="margin-top:14px;">

                        📝 Start Chapter Test

                    </button>

                </div>

            </div>

        </div>


        <br>


        <div id="currentLessonArea"></div>

    `;


    attachStudyEvents();

    renderCurrentLesson();

}


function attachStudyEvents() {

    document
        .querySelectorAll(
            "[data-subject]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        studyState.subject =
                            button.dataset.subject;

                        const chapters =
                            Object.keys(
                                lessonData[
                                    studyState.subject
                                ]
                            );


                        studyState.chapter =
                            chapters[0];

                        studyState.lessonIndex =
                            0;


                        renderStudy();

                    }
                );

            }
        );


    const chapter =
        document.getElementById(
            "studyChapter"
        );


    if (chapter) {

        chapter.addEventListener(
            "change",
            () => {

                studyState.chapter =
                    chapter.value;

                studyState.lessonIndex =
                    0;

                renderStudy();

            }
        );

    }


    document
        .querySelectorAll(
            ".study-lesson-btn"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        studyState.lessonIndex =
                            Number(
                                button.dataset.lessonIndex
                            );

                        renderCurrentLesson();

                        scrollToCurrentLesson();

                    }
                );

            }
        );


    const testButton =
        document.getElementById(
            "chapterTestButton"
        );


    if (testButton) {

        testButton.addEventListener(
            "click",
            startChapterTest
        );

    }

}


function renderCurrentLesson() {

    const area =
        document.getElementById(
            "currentLessonArea"
        );


    if (!area) return;


    const lessons =
        getChapterLessons(
            studyState.subject,
            studyState.chapter
        );


    const lesson =
        lessons[
            studyState.lessonIndex
        ];


    if (!lesson) {

        return;

    }


    const allLessons =
        getAllLessons(
            studyState.subject
        );


    const currentGlobalIndex =
        allLessons.findIndex(
            item =>
                item.subject ===
                    studyState.subject &&
                item.chapter ===
                    studyState.chapter &&
                item.lessonIndex ===
                    studyState.lessonIndex
        );


    const progress =
        allLessons.length
            ? Math.round(
                (
                    (currentGlobalIndex + 1) /
                    allLessons.length
                ) * 100
            )
            : 0;


    const lessonId =
        `${studyState.subject}-${Object.keys(
            lessonData[
                studyState.subject
            ]
        ).indexOf(
            studyState.chapter
        )}-${studyState.lessonIndex}`;


    const isCompleted =
        data.lessonProgress[
            studyState.subject
        ]?.includes(
            lessonId
        );


    const isLast =
        studyState.lessonIndex >=
        lessons.length - 1;


    area.innerHTML = `

        <div class="card">

            <div class="course-top">

                <div>

                    <small>
                        ${escapeHTML(
                            studyState.chapter
                        )}
                    </small>

                    <h2
                        style="margin-top:6px;">

                        ${escapeHTML(
                            lesson.title
                        )}

                    </h2>

                </div>

                <strong>
                    ${studyState.lessonIndex + 1}
                    /
                    ${lessons.length}
                </strong>

            </div>


            <div
                class="progress"
                style="margin:16px 0;">

                <div
                    class="progress-bar"
                    style="width:${progress}%">
                </div>

            </div>


            <article
                class="lesson-content"
                style="
                    line-height:1.8;
                    font-size:16px;
                ">

                ${lesson.content}

            </article>


            <div
                class="card"
                style="margin-top:22px;">

                <h3>
                    💡 Important Points
                </h3>

                <ul
                    style="
                        margin-top:10px;
                        line-height:1.8;
                    ">

                    <li>
                        Concept ko examples ke saath samjho.
                    </li>

                    <li>
                        Important definitions aur formulas revise karo.
                    </li>

                    <li>
                        Chapter exercise attempt karo.
                    </li>

                </ul>

            </div>


            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    gap:10px;
                    margin-top:20px;
                    flex-wrap:wrap;
                ">

                <button
                    class="btn btn-secondary"
                    id="previousLesson"
                    ${
                        studyState.lessonIndex === 0
                            ? "disabled"
                            : ""
                    }>

                    ← Previous

                </button>


                <button
                    class="btn btn-primary"
                    id="completeLesson">

                    ${
                        isCompleted
                            ? "✅ Completed"
                            : "✅ Mark Lesson Complete"
                    }

                </button>


                <button
                    class="btn btn-primary"
                    id="nextLesson">

                    ${
                        isLast
                            ? "Chapter Exercise →"
                            : "Next Topic →"
                    }

                </button>

            </div>

        </div>

    `;


    const previous =
        document.getElementById(
            "previousLesson"
        );


    const complete =
        document.getElementById(
            "completeLesson"
        );


    const next =
        document.getElementById(
            "nextLesson"
        );


    if (previous) {

        previous.addEventListener(
            "click",
            () => {

                if (
                    studyState.lessonIndex >
                    0
                ) {

                    studyState.lessonIndex--;

                    renderStudy();

                    scrollToCurrentLesson();

                }

            }
        );

    }


    if (complete) {

        complete.addEventListener(
            "click",
            () => {

                completeCurrentLesson();

            }
        );

    }


    if (next) {

        next.addEventListener(
            "click",
            () => {

                if (isLast) {

                    startChapterTest();

                } else {

                    completeCurrentLesson(
                        false,
                        true
                    );

                }

            }
        );

    }

}


function completeCurrentLesson(
    finishCourse = false,
    goNext = false
) {

    const subject =
        studyState.subject;


    const lessons =
        getChapterLessons(
            subject,
            studyState.chapter
        );


    const chapterIndex =
        Object.keys(
            lessonData[
                subject
            ]
        ).indexOf(
            studyState.chapter
        );


    const lessonId =
        `${subject}-${chapterIndex}-${studyState.lessonIndex}`;


    if (
        !data.lessonProgress[
            subject
        ].includes(
            lessonId
        )
    ) {

        data.lessonProgress[
            subject
        ].push(
            lessonId
        );


        data.stats.lessons++;


        data.dailyGoal =
            Math.min(
                data.dailyGoalTarget,
                data.dailyGoal + 1
            );


        showToast(
            "Lesson complete! 🎉"
        );

    }


    const progress =
        calculateLessonProgress(
            subject
        );


    const progressSubject =
        normalizeProgressSubject(
            subject
        );


    if (
        progressSubject in
        data.progress
    ) {

        data.progress[
            progressSubject
        ] = progress;

    }


    saveData();


    if (
        goNext &&
        studyState.lessonIndex <
            lessons.length - 1
    ) {

        studyState.lessonIndex++;

    }


    renderStudy();


    setTimeout(
        scrollToCurrentLesson,
        100
    );

}


function scrollToCurrentLesson() {

    const area =
        document.getElementById(
            "currentLessonArea"
        );


    if (area) {

        area.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }

}


/* ============================================================
   CHAPTER TEST
   ============================================================ */

function getChapterQuestions() {

    const key =
        `${studyState.subject}|${studyState.chapter}`;


    if (
        chapterQuestions[key]
    ) {

        return chapterQuestions[key];

    }


    return [

        {
            type: "MCQ",
            question:
                `What is the main idea of ${studyState.chapter}?`,
            options: [
                "Understanding the chapter concepts",
                "Ignoring definitions",
                "Only memorising answers",
                "Skipping practice"
            ],
            answer: 0
        },

        {
            type: "MCQ",
            question:
                "Which is the best way to learn a difficult concept?",
            options: [
                "Understand it step by step",
                "Skip it",
                "Only memorise the title",
                "Never practise"
            ],
            answer: 0
        },

        {
            type: "SHORT",
            question:
                "Write one important concept from this chapter.",
            answer:
                "Students should identify and explain a relevant concept from the chapter."
        },

        {
            type: "SHORT",
            question:
                "Why is practice important?",
            answer:
                "Practice helps strengthen understanding and reveals areas that need revision."
        },

        {
            type: "LONG",
            question:
                "Summarise what you learned from this chapter.",
            answer:
                "A good summary should mention the key definitions, concepts, examples and important relationships covered in the chapter."
        }

    ];

}


function startChapterTest() {

    const questions =
        getChapterQuestions();


    activeChapterTest = {

        subject:
            studyState.subject,

        chapter:
            studyState.chapter,

        questions,

        current: 0,

        score: 0,

        answers: [],

        finished: false

    };


    renderChapterTest();

}


function renderChapterTest() {

    const area =
        document.getElementById(
            "currentLessonArea"
        );


    if (!area || !activeChapterTest) {

        return;

    }


    const test =
        activeChapterTest;


    const q =
        test.questions[
            test.current
        ];


    if (!q) {

        finishChapterTest();

        return;

    }


    if (
        q.type ===
        "MCQ"
    ) {

        area.innerHTML = `

            <div class="quiz-card">

                <div class="quiz-progress">

                    Chapter Test:
                    Question
                    ${test.current + 1}
                    /
                    ${test.questions.length}

                </div>


                <h2
                    style="margin:18px 0;">

                    ${escapeHTML(
                        q.question
                    )}

                </h2>


                <div class="quiz-options">

                    ${q.options
                        .map(
                            (
                                option,
                                index
                            ) => `

                                <button
                                    class="quiz-option chapter-option"
                                    data-index="${index}"
                                    type="button">

                                    ${escapeHTML(
                                        option
                                    )}

                                </button>

                            `
                        )
                        .join("")}

                </div>

            </div>

        `;


        document
            .querySelectorAll(
                ".chapter-option"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        () => {

                            const selected =
                                Number(
                                    button.dataset.index
                                );


                            if (
                                test.answers[
                                    test.current
                                ] !== undefined
                            ) {

                                return;

                            }


                            test.answers[
                                test.current
                            ] =
                                selected;


                            if (
                                selected ===
                                q.answer
                            ) {

                                test.score++;

                                button.classList.add(
                                    "correct"
                                );

                            } else {

                                button.classList.add(
                                    "wrong"
                                );


                                document
                                    .querySelectorAll(
                                        ".chapter-option"
                                    )
                                    .forEach(
                                        item => {

                                            if (
                                                Number(
                                                    item.dataset.index
                                                ) ===
                                                q.answer
                                            ) {

                                                item.classList.add(
                                                    "correct"
                                                );

                                            }

                                        }
                                    );

                            }


                            document
                                .querySelectorAll(
                                    ".chapter-option"
                                )
                                .forEach(
                                    item => {

                                        item.disabled =
                                            true;

                                    }
                                );


                            setTimeout(
                                () => {

                                    test.current++;


                                    renderChapterTest();

                                },
                                800
                            );

                        }
                    );

                }
            );

    } else {

        area.innerHTML = `

            <div class="quiz-card">

                <div class="quiz-progress">

                    Chapter Test:
                    Question
                    ${test.current + 1}
                    /
                    ${test.questions.length}

                </div>


                <h2
                    style="margin:18px 0;">

                    ${escapeHTML(
                        q.question
                    )}

                </h2>


                <textarea
                    id="chapterAnswer"
                    class="form-textarea"
                    rows="6"
                    placeholder="Apna answer yahan likho...">
                </textarea>


                <button
                    class="btn btn-primary"
                    id="submitChapterAnswer"
                    style="margin-top:12px;">

                    Submit Answer

                </button>

            </div>

        `;


        const submit =
            document.getElementById(
                "submitChapterAnswer"
            );


        if (submit) {

            submit.addEventListener(
                "click",
                () => {

                    const answer =
                        document
                            .getElementById(
                                "chapterAnswer"
                            )
                            ?.value
                            .trim();


                    if (!answer) {

                        showToast(
                            "Answer likho."
                        );

                        return;

                    }


                    test.answers[
                        test.current
                    ] =
                        answer;


                    test.score +=
                        evaluateTextAnswer(
                            answer,
                            q.answer
                        );


                    test.current++;

                    renderChapterTest();

                }
            );

        }

    }

}


function evaluateTextAnswer(
    userAnswer,
    expectedAnswer
) {

    const words =
        String(
            expectedAnswer
        )
        .toLowerCase()
        .split(/\W+/)
        .filter(
            word =>
                word.length > 3
        );


    const user =
        userAnswer
            .toLowerCase();


    const matches =
        words.filter(
            word =>
                user.includes(
                    word
                )
        ).length;


    return matches >=
        Math.max(
            1,
            Math.ceil(
                words.length * 0.3
            )
        )
            ? 1
            : 0;

}


function finishChapterTest() {

    if (!activeChapterTest) {

        return;

    }


    const test =
        activeChapterTest;


    const total =
        test.questions.length;


    const percentage =
        Math.round(
            (
                test.score /
                total
            ) * 100
        );


    const key =
        `${test.subject}|${test.chapter}`;


    data.chapterTests[key] = {

        score:
            test.score,

        total,

        percentage,

        date:
            new Date().toISOString()

    };


    if (
        percentage >=
        60
    ) {

        const allLessons =
            getChapterLessons(
                test.subject,
                test.chapter
            );


        const chapterIndex =
            Object.keys(
                lessonData[
                    test.subject
                ]
            ).indexOf(
                test.chapter
            );


        allLessons.forEach(
            (
                lesson,
                index
            ) => {

                const id =
                    `${test.subject}-${chapterIndex}-${index}`;


                if (
                    !data.lessonProgress[
                        test.subject
                    ].includes(
                        id
                    )
                ) {

                    data.lessonProgress[
                        test.subject
                    ].push(
                        id
                    );

                }

            }
        );


        data.progress[
            normalizeProgressSubject(
                test.subject
            )
        ] =
            calculateLessonProgress(
                test.subject
            );

    }


    saveData();


    const area =
        document.getElementById(
            "currentLessonArea"
        );


    if (area) {

        area.innerHTML = `

            <div class="quiz-card quiz-score">

                <div style="font-size:48px;">
                    ${
                        percentage >= 60
                            ? "🏆"
                            : "📖"
                    }
                </div>


                <h2>
                    Chapter Test Complete
                </h2>


                <div class="quiz-score-number">
                    ${test.score}/${total}
                </div>


                <h3>
                    ${percentage}%
                </h3>


                <p>
                    ${
                        percentage >= 60
                            ? "Chapter completed! Excellent work. 🎉"
                            : "Chapter ko ek baar aur revise karke test try karo. 📚"
                    }
                </p>


                <br>


                <button
                    class="btn btn-primary"
                    id="backToStudy">

                    ← Back to Study

                </button>

            </div>

        `;


        document
            .getElementById(
                "backToStudy"
            )
            ?.addEventListener(
                "click",
                () => {

                    activeChapterTest =
                        null;

                    renderStudy();

                }
            );

    }


    activeChapterTest =
        null;

}


/* ============================================================
   AI QUIZ
   ============================================================ */

function renderPractice() {

    pageContent.innerHTML = `

        <div class="page-header">

            <h1>
                📝 AI Quiz
            </h1>

            <p>
                Generate a 5-question AI quiz and test yourself.
            </p>

        </div>


        <div class="card">

            <div class="grid-2">

                <div class="form-group">

                    <label class="form-label">
                        Subject
                    </label>

                    <select
                        id="quizSubject"
                        class="form-select">

                        <option>
                            Physics
                        </option>

                        <option>
                            Mathematics
                        </option>

                        <option>
                            Chemistry
                        </option>

                        <option>
                            Computer Science
                        </option>

                        <option>
                            English
                        </option>

                    </select>

                </div>


                <div class="form-group">

                    <label class="form-label">
                        Difficulty
                    </label>

                    <select
                        id="quizDifficulty"
                        class="form-select">

                        <option>
                            Easy
                        </option>

                        <option>
                            Medium
                        </option>

                        <option>
                            Hard
                        </option>

                    </select>

                </div>

            </div>


            <button
                class="btn btn-primary"
                id="generateQuiz">

                🤖 Generate AI Quiz

            </button>

        </div>


        <div
            id="quizArea"
            style="margin-top:18px;">

        </div>


        <div
            id="quizHistoryArea"
            style="margin-top:18px;">

            ${renderQuizHistoryHTML()}

        </div>

    `;


    const button =
        document.getElementById(
            "generateQuiz"
        );


    if (button) {

        button.addEventListener(
            "click",
            generateQuiz
        );

    }


    attachQuizHistoryEvents();

}


async function generateQuiz() {

    const subject =
        document.getElementById(
            "quizSubject"
        )?.value ||
        "Physics";


    const difficulty =
        document.getElementById(
            "quizDifficulty"
        )?.value ||
        "Easy";


    const area =
        document.getElementById(
            "quizArea"
        );


    const button =
        document.getElementById(
            "generateQuiz"
        );


    if (!area) return;


    if (button) {

        button.disabled = true;

        button.textContent =
            "Generating...";

    }


    area.innerHTML = `

        <div class="card">

            🤖 AI is creating your quiz...

        </div>

    `;


    try {

        const prompt = `

Create a Class 11 ${subject} multiple choice quiz.

Difficulty: ${difficulty}

Return ONLY valid JSON.

Format:

{
  "questions": [
    {
      "question": "Question text",
      "options": [
        "Option A",
        "Option B",
        "Option C",
        "Option D"
      ],
      "answer": 0,
      "explanation": "Short explanation"
    }
  ]
}

Rules:

- Exactly 5 questions.
- Exactly 4 options per question.
- answer must be 0, 1, 2 or 3.
- Questions must be educational and factually correct.
- Use Class 11 level concepts.
- Do not include markdown.
- Do not include extra text outside JSON.

`;


        const answer =
            await askAI(
                prompt
            );


        const quiz =
            parseQuizJSON(
                answer
            );


        validateQuiz(
            quiz
        );


        startQuiz(
            quiz.questions,
            subject,
            difficulty
        );

    } catch (error) {

        area.innerHTML = `

            <div class="card">

                ❌ Quiz generate nahi ho paya.

                <br><br>

                ${escapeHTML(
                    error.message
                )}

                <br><br>

                Please try again.

            </div>

        `;

    } finally {

        if (button) {

            button.disabled = false;

            button.textContent =
                "🤖 Generate AI Quiz";

        }

    }

}


/* ============================================================
   QUIZ JSON PARSER
   ============================================================ */

function parseQuizJSON(
    text
) {

    if (!text) {

        throw new Error(
            "AI ne quiz response nahi diya."
        );

    }


    let clean =
        String(text).trim();


    clean =
        clean.replace(
            /^```json\s*/i,
            ""
        );


    clean =
        clean.replace(
            /^```\s*/i,
            ""
        );


    clean =
        clean.replace(
            /\s*```$/i,
            ""
        );


    clean =
        clean.trim();


    try {

        return JSON.parse(
            clean
        );

    } catch {

        const start =
            clean.indexOf(
                "{"
            );


        const end =
            clean.lastIndexOf(
                "}"
            );


        if (
            start !== -1 &&
            end !== -1 &&
            end > start
        ) {

            return JSON.parse(
                clean.substring(
                    start,
                    end + 1
                )
            );

        }


        throw new Error(
            "AI quiz JSON invalid hai."
        );

    }

}


/* ============================================================
   QUIZ VALIDATION
   ============================================================ */

function validateQuiz(
    quiz
) {

    if (
        !quiz ||
        !Array.isArray(
            quiz.questions
        )
    ) {

        throw new Error(
            "Quiz questions missing hain."
        );

    }


    if (
        quiz.questions.length !==
        5
    ) {

        throw new Error(
            "AI ne exactly 5 questions generate nahi kiye."
        );

    }


    quiz.questions.forEach(
        (
            question,
            index
        ) => {

            if (
                !question ||
                typeof question.question !==
                    "string" ||
                !question.question.trim()
            ) {

                throw new Error(
                    `Question ${index + 1} invalid hai.`
                );

            }


            if (
                !Array.isArray(
                    question.options
                ) ||
                question.options.length !==
                    4
            ) {

                throw new Error(
                    `Question ${index + 1} me exactly 4 options hone chahiye.`
                );

            }


            question.options =
                question.options.map(
                    option =>
                        String(option)
                );


            const answer =
                Number(
                    question.answer
                );


            if (
                !Number.isInteger(
                    answer
                ) ||
                answer < 0 ||
                answer > 3
            ) {

                throw new Error(
                    `Question ${index + 1} ka correct answer invalid hai.`
                );

            }


            question.answer =
                answer;


            if (
                !question.explanation
            ) {

                question.explanation =
                    "Correct answer selected according to the AI-generated quiz.";

            }

        }
    );

}


/* ============================================================
   START QUIZ
   ============================================================ */

function startQuiz(
    questions,
    subject,
    difficulty
) {

    stopQuizTimer();


    activeQuiz = {

        questions,

        subject,

        difficulty,

        current: 0,

        score: 0,

        answered: 0,

        timeLeft:
            QUIZ_TIME,

        selectedAnswers: [],

        finished: false

    };


    renderQuizQuestion();

    startQuizTimer();

}


/* ============================================================
   QUIZ TIMER
   ============================================================ */

function startQuizTimer() {

    stopQuizTimer();


    updateQuizTimerUI();


    quizTimer =
        setInterval(
            () => {

                if (!activeQuiz) {

                    stopQuizTimer();

                    return;

                }


                activeQuiz.timeLeft--;


                updateQuizTimerUI();


                if (
                    activeQuiz.timeLeft <=
                    0
                ) {

                    stopQuizTimer();


                    showToast(
                        "⏰ Time up! Quiz submit ho raha hai."
                    );


                    finishQuiz(
                        true
                    );

                }

            },
            1000
        );

}


function stopQuizTimer() {

    if (quizTimer) {

        clearInterval(
            quizTimer
        );

        quizTimer = null;

    }

}


function formatTime(
    seconds
) {

    const minutes =
        Math.floor(
            seconds / 60
        );


    const remaining =
        seconds % 60;


    return `${String(
        minutes
    ).padStart(
        2,
        "0"
    )}:${String(
        remaining
    ).padStart(
        2,
        "0"
    )}`;

}


function updateQuizTimerUI() {

    const timer =
        document.getElementById(
            "quizTimer"
        );


    if (
        !timer ||
        !activeQuiz
    ) {

        return;

    }


    timer.textContent =
        `⏱️ ${formatTime(
            activeQuiz.timeLeft
        )}`;


    timer.style.fontWeight =
        activeQuiz.timeLeft <=
            10
            ? "800"
            : "700";

}


/* ============================================================
   RENDER QUIZ QUESTION
   ============================================================ */

function renderQuizQuestion() {

    if (!activeQuiz) return;


    const area =
        document.getElementById(
            "quizArea"
        );


    if (!area) return;


    const questions =
        activeQuiz.questions;


    const current =
        activeQuiz.current;


    if (
        current >=
        questions.length
    ) {

        finishQuiz();

        return;

    }


    const q =
        questions[current];


    const progress =
        (
            (
                current + 1
            ) /
            questions.length
        ) * 100;


    area.innerHTML = `

        <div class="quiz-card">

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    gap:12px;
                    margin-bottom:15px;
                    flex-wrap:wrap;
                ">

                <div
                    class="quiz-progress">

                    Question
                    ${current + 1}
                    /
                    ${questions.length}

                </div>


                <div
                    id="quizTimer"
                    style="
                        font-weight:700;
                        padding:8px 12px;
                        border-radius:10px;
                        background:rgba(37,99,235,.10);
                    ">

                    ⏱️
                    ${formatTime(
                        activeQuiz.timeLeft
                    )}

                </div>

            </div>


            <div class="progress">

                <div
                    class="progress-bar"
                    style="width:${progress}%">
                </div>

            </div>


            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    margin:12px 0;
                    font-size:13px;
                    opacity:.75;
                ">

                <span>
                    ${escapeHTML(
                        activeQuiz.subject
                    )}
                </span>

                <span>
                    ${escapeHTML(
                        activeQuiz.difficulty
                    )}
                </span>

            </div>


            <div class="quiz-question">

                ${escapeHTML(
                    q.question
                )}

            </div>


            <div class="quiz-options">

                ${q.options
                    .map(
                        (
                            option,
                            index
                        ) => `

                            <button
                                class="quiz-option"
                                data-index="${index}"
                                type="button">

                                ${escapeHTML(
                                    option
                                )}

                            </button>

                        `
                    )
                    .join("")}

            </div>


            <div
                id="quizExplanation"
                style="margin-top:16px;">

            </div>

        </div>

    `;


    document
        .querySelectorAll(
            ".quiz-option"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        handleQuizAnswer(
                            Number(
                                button.dataset.index
                            )
                        );

                    }
                );

            }
        );


    updateQuizTimerUI();

}


function handleQuizAnswer(
    selected
) {

    if (
        !activeQuiz ||
        activeQuiz.finished
    ) {

        return;

    }


    const current =
        activeQuiz.current;


    const q =
        activeQuiz.questions[
            current
        ];


    if (!q) return;


    if (
        activeQuiz.selectedAnswers[
            current
        ] !== undefined
    ) {

        return;

    }


    const correct =
        Number(
            q.answer
        );


    activeQuiz.selectedAnswers[
        current
    ] =
        selected;


    activeQuiz.answered++;


    const buttons =
        document.querySelectorAll(
            ".quiz-option"
        );


    buttons.forEach(
        button => {

            button.disabled =
                true;


            const index =
                Number(
                    button.dataset.index
                );


            if (
                index ===
                correct
            ) {

                button.classList.add(
                    "correct"
                );

            }


            if (
                index ===
                    selected &&
                index !==
                    correct
            ) {

                button.classList.add(
                    "wrong"
                );

            }

        }
    );


    const isCorrect =
        selected ===
        correct;


    if (isCorrect) {

        activeQuiz.score++;


        showToast(
            "✅ Correct answer!"
        );

    } else {

        showToast(
            "❌ Incorrect answer."
        );

    }


    const explanation =
        document.getElementById(
            "quizExplanation"
        );


    if (explanation) {

        explanation.innerHTML = `

            <div
                class="card"
                style="margin-top:10px;">

                <strong>

                    ${
                        isCorrect
                            ? "✅ Correct!"
                            : "❌ Not quite!"
                    }

                </strong>


                <p
                    style="margin-top:8px;">

                    <strong>
                        Explanation:
                    </strong>

                    ${escapeHTML(
                        q.explanation
                    )}

                </p>

            </div>

        `;

    }


    setTimeout(
        () => {

            if (!activeQuiz) return;

            if (
                activeQuiz.finished
            ) return;


            activeQuiz.current++;


            if (
                activeQuiz.current >=
                activeQuiz.questions.length
            ) {

                finishQuiz();

            } else {

                activeQuiz.timeLeft =
                    QUIZ_TIME;

                renderQuizQuestion();

            }

        },
        1100
    );

}


/* ============================================================
   FINISH QUIZ
   ============================================================ */

function finishQuiz(
    timeUp = false
) {

    if (
        !activeQuiz ||
        activeQuiz.finished
    ) {

        return;

    }


    activeQuiz.finished =
        true;


    stopQuizTimer();


    const quiz =
        activeQuiz;


    const total =
        quiz.questions.length;


    const score =
        quiz.score;


    const percentage =
        Math.round(
            (
                score /
                total
            ) * 100
        );


    const unanswered =
        total -
        quiz.answered;


    data.quizHistory.unshift({

        id:
            Date.now(),

        subject:
            quiz.subject,

        difficulty:
            quiz.difficulty,

        score,

        total,

        percentage,

        unanswered,

        timeUp,

        date:
            new Date().toISOString()

    });


    data.quizHistory =
        data.quizHistory.slice(
            0,
            30
        );


    data.stats.quizzes++;


    data.dailyGoal =
        Math.min(
            data.dailyGoalTarget,
            data.dailyGoal + 1
        );


    updateQuizSubjectProgress(
        quiz.subject,
        percentage
    );


    saveData();


    const area =
        document.getElementById(
            "quizArea"
        );


    if (!area) {

        activeQuiz = null;

        return;

    }


    let resultMessage =
        "Good attempt! Keep practicing. 📚";


    if (
        percentage ===
        100
    ) {

        resultMessage =
            "Perfect score! Outstanding! 🔥";

    } else if (
        percentage >=
        80
    ) {

        resultMessage =
            "Excellent work! Keep it up! 🚀";

    } else if (
        percentage >=
        60
    ) {

        resultMessage =
            "Great work! A little more practice and you'll improve further. 💪";

    } else if (
        percentage >=
        40
    ) {

        resultMessage =
            "Nice attempt! Review the explanations and try again. 📖";

    }


    const progressSubject =
        normalizeProgressSubject(
            quiz.subject
        );


    const currentProgress =
        data.progress[
            progressSubject
        ] || 0;


    area.innerHTML = `

        <div class="quiz-card quiz-score">

            <div style="font-size:48px;">
                🏆
            </div>


            <h2>
                Quiz Complete!
            </h2>


            ${
                timeUp
                    ? `
                        <p>
                            ⏰ Time was up.
                        </p>
                    `
                    : ""
            }


            <div class="quiz-score-number">
                ${score}/${total}
            </div>


            <h3>
                ${percentage}%
            </h3>


            <p>
                ${escapeHTML(
                    resultMessage
                )}
            </p>


            <div
                class="grid-3"
                style="margin-top:20px;">

                <div class="card">

                    <strong>
                        ${score}
                    </strong>

                    <small>
                        Correct
                    </small>

                </div>


                <div class="card">

                    <strong>
                        ${total - score}
                    </strong>

                    <small>
                        Incorrect
                    </small>

                </div>


                <div class="card">

                    <strong>
                        ${unanswered}
                    </strong>

                    <small>
                        Unanswered
                    </small>

                </div>

            </div>


            <br>


            <div class="card">

                <strong>
                    📈 ${escapeHTML(
                        quiz.subject
                    )} Progress Updated
                </strong>


                <p
                    style="margin-top:8px;">

                    Current progress:
                    <strong>
                        ${currentProgress}%
                    </strong>

                </p>

            </div>


            <br>


            <button
                class="btn btn-primary"
                id="newQuiz">

                🔄 Try Another Quiz

            </button>


            <button
                class="btn btn-secondary"
                id="viewQuizHistory"
                style="margin-left:8px;">

                🏆 View History

            </button>

        </div>

    `;


    document
        .getElementById(
            "newQuiz"
        )
        ?.addEventListener(
            "click",
            renderPractice
        );


    document
        .getElementById(
            "viewQuizHistory"
        )
        ?.addEventListener(
            "click",
            () => {

                renderPractice();

                setTimeout(
                    () => {

                        document
                            .getElementById(
                                "quizHistoryArea"
                            )
                            ?.scrollIntoView({
                                behavior:
                                    "smooth"
                            });

                    },
                    100
                );

            }
        );


    activeQuiz =
        null;

}


/* ============================================================
   QUIZ PROGRESS
   ============================================================ */

function updateQuizSubjectProgress(
    subject,
    percentage
) {

    const progressSubject =
        normalizeProgressSubject(
            subject
        );


    const oldProgress =
        Number(
            data.progress[
                progressSubject
            ] || 0
        );


    let increase = 1;


    if (
        percentage >=
        80
    ) {

        increase = 4;

    } else if (
        percentage >=
        60
    ) {

        increase = 3;

    } else if (
        percentage >=
        40
    ) {

        increase = 2;

    }


    data.progress[
        progressSubject
    ] =
        Math.min(
            100,
            oldProgress +
            increase
        );

}


/* ============================================================
   QUIZ HISTORY
   ============================================================ */

function renderQuizHistoryHTML() {

    if (
        !Array.isArray(
            data.quizHistory
        ) ||
        !data.quizHistory.length
    ) {

        return `

            <div class="card">

                <h3>
                    🏆 Quiz History
                </h3>

                <p>
                    Abhi tak koi completed quiz nahi hai.
                </p>

            </div>

        `;

    }


    const history =
        data.quizHistory.slice(
            0,
            10
        );


    return `

        <div class="card">

            <div
                style="
                    display:flex;
                    justify-content:space-between;
                    align-items:center;
                    gap:10px;
                    flex-wrap:wrap;
                ">

                <div>

                    <h3>
                        🏆 Quiz History
                    </h3>

                    <p>
                        Your latest quiz attempts.
                    </p>

                </div>


                <button
                    class="btn btn-danger"
                    id="clearQuizHistory">

                    Clear History

                </button>

            </div>


            <div
                style="
                    margin-top:15px;
                    display:flex;
                    flex-direction:column;
                    gap:10px;
                ">

                ${history
                    .map(
                        item => `

                            <div
                                style="
                                    padding:14px;
                                    border:1px solid var(--border);
                                    border-radius:12px;
                                ">

                                <div
                                    style="
                                        display:flex;
                                        justify-content:space-between;
                                        gap:10px;
                                        align-items:center;
                                        flex-wrap:wrap;
                                    ">

                                    <strong>
                                        ${escapeHTML(
                                            item.subject
                                        )}
                                    </strong>


                                    <strong>
                                        ${item.score}/${item.total}
                                        (${item.percentage}%)
                                    </strong>

                                </div>


                                <div
                                    style="
                                        margin-top:7px;
                                        font-size:13px;
                                        opacity:.7;
                                    ">

                                    ${escapeHTML(
                                        item.difficulty
                                    )}

                                    •

                                    ${escapeHTML(
                                        formatQuizDate(
                                            item.date
                                        )
                                    )}

                                    ${
                                        item.timeUp
                                            ? " • ⏰ Time Up"
                                            : ""
                                    }

                                </div>

                            </div>

                        `
                    )
                    .join("")}

            </div>

        </div>

    `;

}


function formatQuizDate(
    date
) {

    try {

        return new Date(
            date
        ).toLocaleString();

    } catch {

        return "Unknown date";

    }

}


function attachQuizHistoryEvents() {

    document
        .getElementById(
            "clearQuizHistory"
        )
        ?.addEventListener(
            "click",
            clearQuizHistory
        );

}


function clearQuizHistory() {

    if (
        !data.quizHistory.length
    ) {

        showToast(
            "Quiz history already empty."
        );

        return;

    }


    if (
        !confirm(
            "Quiz history delete karni hai?"
        )
    ) {

        return;

    }


    data.quizHistory =
        [];


    saveData();


    showToast(
        "Quiz history cleared."
    );


    renderPractice();

}


/* ============================================================
   CODING LAB
   ============================================================ */

function renderCoding() {

    pageContent.innerHTML = `

        <div class="page-header">

            <h1>
                💻 Coding Lab
            </h1>

            <p>
                Write HTML, CSS and JavaScript
                and run your project instantly.
            </p>

        </div>


        <div class="code-editor">

            <div class="code-tabs">

                <button
                    class="code-tab active"
                    data-code-tab="html">

                    HTML

                </button>


                <button
                    class="code-tab"
                    data-code-tab="css">

                    CSS

                </button>


                <button
                    class="code-tab"
                    data-code-tab="js">

                    JavaScript

                </button>

            </div>


            <textarea
                id="codeEditor"
                class="code-textarea"
                spellcheck="false"></textarea>

        </div>


        <div class="code-actions">

            <button
                class="btn btn-primary"
                id="runCode">

                ▶ Run

            </button>


            <button
                class="btn btn-secondary"
                id="saveCode">

                💾 Save

            </button>


            <button
                class="btn btn-secondary"
                id="resetCode">

                ↩ Reset

            </button>

        </div>


        <div class="code-output">

            <iframe
                id="codeOutput"
                sandbox="allow-scripts">
            </iframe>

        </div>

    `;


    currentCodeTab =
        "html";


    loadCodeEditor();

    attachCodingEvents();

}


function loadCodeEditor() {

    const editor =
        document.getElementById(
            "codeEditor"
        );


    if (!editor) return;


    editor.value =
        data.coding[
            currentCodeTab
        ] || "";

}


function attachCodingEvents() {

    document
        .querySelectorAll(
            ".code-tab"
        )
        .forEach(
            tab => {

                tab.addEventListener(
                    "click",
                    () => {

                        const editor =
                            document.getElementById(
                                "codeEditor"
                            );


                        if (editor) {

                            data.coding[
                                currentCodeTab
                            ] =
                                editor.value;

                        }


                        currentCodeTab =
                            tab.dataset.codeTab;


                        document
                            .querySelectorAll(
                                ".code-tab"
                            )
                            .forEach(
                                item => {

                                    item.classList.toggle(
                                        "active",
                                        item === tab
                                    );

                                }
                            );


                        loadCodeEditor();

                    }
                );

            }
        );


    document
        .getElementById(
            "runCode"
        )
        ?.addEventListener(
            "click",
            runCode
        );


    document
        .getElementById(
            "saveCode"
        )
        ?.addEventListener(
            "click",
            saveCode
        );


    document
        .getElementById(
            "resetCode"
        )
        ?.addEventListener(
            "click",
            resetCode
        );


    const editor =
        document.getElementById(
            "codeEditor"
        );


    if (editor) {

        editor.addEventListener(
            "input",
            () => {

                data.coding[
                    currentCodeTab
                ] =
                    editor.value;

            }
        );

    }

}


function runCode() {

    const editor =
        document.getElementById(
            "codeEditor"
        );


    if (!editor) return;


    data.coding[
        currentCodeTab
    ] =
        editor.value;


    saveData();


    const html =
        data.coding.html ||
        "";


    const css =
        data.coding.css ||
        "";


    const js =
        data.coding.js ||
        "";


    const output =
        document.getElementById(
            "codeOutput"
        );


    if (!output) return;


    output.srcdoc = `

        <!DOCTYPE html>

        <html>

        <head>

            <meta charset="UTF-8">

            <style>
                ${css}
            </style>

        </head>

        <body>

            ${html}

            <script>
                ${js}
            <\/script>

        </body>

        </html>

    `;


    updateStats(
        "codingProjects"
    );


    showToast(
        "Code run successfully ▶️"
    );

}


function saveCode() {

    const editor =
        document.getElementById(
            "codeEditor"
        );


    if (!editor) return;


    data.coding[
        currentCodeTab
    ] =
        editor.value;


    saveData();


    showToast(
        "Code saved 💾"
    );

}


function resetCode() {

    if (
        !confirm(
            "Current coding project reset karna hai?"
        )
    ) {

        return;

    }


    data.coding =
        structuredClone(
            defaultData.coding
        );


    saveData();


    currentCodeTab =
        "html";


    renderCoding();


    showToast(
        "Coding project reset ho gaya."
    );

}


/* ============================================================
   CAREER
   ============================================================ */

function renderCareer() {

    pageContent.innerHTML = `

        <div class="page-header">

            <h1>
                🎯 Career Roadmap
            </h1>

            <p>
                Tell BharatBuddy what you want
                to become and get an AI roadmap.
            </p>

        </div>


        <div class="card">

            <div class="form-group">

                <label class="form-label">
                    Your Career Goal
                </label>

                <input
                    id="careerGoal"
                    class="form-input"
                    placeholder="Example: Software Developer"
                >

            </div>


            <div class="form-group">

                <label class="form-label">
                    Your Current Level
                </label>

                <select
                    id="careerLevel"
                    class="form-select">

                    <option>
                        Beginner
                    </option>

                    <option>
                        Intermediate
                    </option>

                    <option>
                        Advanced
                    </option>

                </select>

            </div>


            <button
                class="btn btn-primary"
                id="careerGenerate">

                🤖 Generate My Roadmap

            </button>

        </div>


        <div
            id="careerResult"
            style="margin-top:18px;">

        </div>

    `;


    document
        .getElementById(
            "careerGenerate"
        )
        ?.addEventListener(
            "click",
            generateCareerRoadmap
        );

}


async function generateCareerRoadmap() {

    const goalInput =
        document.getElementById(
            "careerGoal"
        );


    const levelInput =
        document.getElementById(
            "careerLevel"
        );


    const result =
        document.getElementById(
            "careerResult"
        );


    const button =
        document.getElementById(
            "careerGenerate"
        );


    if (
        !goalInput ||
        !levelInput ||
        !result ||
        !button
    ) {

        return;

    }


    const goal =
        goalInput.value.trim();


    const level =
        levelInput.value;


    if (!goal) {

        showToast(
            "Please enter your career goal."
        );

        return;

    }


    button.disabled =
        true;


    button.textContent =
        "Creating roadmap...";


    result.innerHTML = `

        <div class="card">

            🤖 AI is preparing your roadmap...

        </div>

    `;


    try {

        const prompt = `

Create a practical career roadmap for an Indian student.

Career goal: ${goal}

Current level: ${level}

Include:

1. Skills to learn
2. Subjects to focus on
3. Projects to build
4. Free/low-cost learning approach
5. Portfolio advice
6. Internship preparation
7. Interview preparation
8. A realistic step-by-step timeline

Use simple language.

`;


        const answer =
            await askAI(
                prompt
            );


        result.innerHTML = `

            <div class="career-card">

                <h3>
                    🚀 ${escapeHTML(
                        goal
                    )} Roadmap
                </h3>

                <div
                    style="margin-top:12px;">

                    ${formatAIText(
                        answer
                    )}

                </div>

            </div>

        `;

    } catch (error) {

        result.innerHTML = `

            <div class="card">

                ❌ Roadmap generate nahi ho paya.

                <br><br>

                ${escapeHTML(
                    error.message
                )}

            </div>

        `;

    } finally {

        button.disabled =
            false;

        button.textContent =
            "🤖 Generate My Roadmap";

    }

}


/* ============================================================
   ENGLISH PRACTICE
   ============================================================ */

function renderEnglish() {

    pageContent.innerHTML = `

        <div class="page-header">

            <h1>
                🗣️ English Practice
            </h1>

            <p>
                Improve grammar, vocabulary,
                speaking and interview communication.
            </p>

        </div>


        <div class="practice-panel">

            <div class="practice-buttons">

                <button
                    class="practice-btn"
                    data-english="conversation">

                    <strong>
                        💬 Conversation
                    </strong>

                    <small>
                        Practice everyday English.
                    </small>

                </button>


                <button
                    class="practice-btn"
                    data-english="grammar">

                    <strong>
                        📖 Grammar
                    </strong>

                    <small>
                        Improve sentence structure.
                    </small>

                </button>


                <button
                    class="practice-btn"
                    data-english="vocabulary">

                    <strong>
                        🧠 Vocabulary
                    </strong>

                    <small>
                        Learn useful new words.
                    </small>

                </button>


                <button
                    class="practice-btn"
                    data-english="interview">

                    <strong>
                        🎤 Interview
                    </strong>

                    <small>
                        Practice interview questions.
                    </small>

                </button>

            </div>

        </div>


        <div
            id="englishResult"
            style="margin-top:18px;">

        </div>

    `;


    document
        .querySelectorAll(
            "[data-english]"
        )
        .forEach(
            button => {

                button.addEventListener(
                    "click",
                    () => {

                        startEnglishPractice(
                            button.dataset.english
                        );

                    }
                );

            }
        );

}


async function startEnglishPractice(
    type
) {

    const result =
        document.getElementById(
            "englishResult"
        );


    if (!result) return;


    const topics = {

        conversation:
            "Start a friendly English conversation with a student. Ask one simple question at a time and correct grammar politely.",

        grammar:
            "Create a simple English grammar practice exercise for a student. Give questions one by one and explain mistakes.",

        vocabulary:
            "Teach 10 useful English vocabulary words with simple meanings, examples and a short practice exercise.",

        interview:
            "Start a beginner-friendly English interview practice session. Ask one question at a time and provide feedback."

    };


    result.innerHTML = `

        <div class="card">

            🤖 Preparing practice...

        </div>

    `;


    try {

        const answer =
            await askAI(
                topics[type]
            );


        updateStats(
            "englishSessions"
        );


        data.progress.English =
            Math.min(
                100,
                (
                    data.progress.English ||
                    0
                ) + 2
            );


        saveData();


        result.innerHTML = `

            <div class="career-card">

                <h3>
                    🗣️ Practice Session
                </h3>

                <div
                    style="margin-top:12px;">

                    ${formatAIText(
                        answer
                    )}

                </div>

            </div>

        `;

    } catch (error) {

        result.innerHTML = `

            <div class="card">

                ❌ Practice unavailable.

                <br><br>

                ${escapeHTML(
                    error.message
                )}

            </div>

        `;

    }

}


/* ============================================================
   PROGRESS
   ============================================================ */

function renderProgress() {

    ensureStudyProgress();


    const totalActivities =

        data.stats.questions +

        data.stats.quizzes +

        data.stats.lessons +

        data.stats.codingProjects +

        data.stats.englishSessions;


    const subjectStats =
        Object.entries(
            data.progress
        );


    pageContent.innerHTML = `

        <div class="page-header">

            <h1>
                📊 Your Progress
            </h1>

            <p>
                Track your complete learning journey.
            </p>

        </div>


        <div class="grid-3">

            <div class="stat-card">

                <div class="stat-icon">
                    🤖
                </div>

                <div class="stat-value">
                    ${data.stats.questions}
                </div>

                <div class="stat-label">
                    AI Questions
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    📝
                </div>

                <div class="stat-value">
                    ${data.stats.quizzes}
                </div>

                <div class="stat-label">
                    Quizzes
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    📚
                </div>

                <div class="stat-value">
                    ${data.stats.lessons}
                </div>

                <div class="stat-label">
                    Lessons
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    💻
                </div>

                <div class="stat-value">
                    ${data.stats.codingProjects}
                </div>

                <div class="stat-label">
                    Coding Runs
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    🗣️
                </div>

                <div class="stat-value">
                    ${data.stats.englishSessions}
                </div>

                <div class="stat-label">
                    English Sessions
                </div>

            </div>


            <div class="stat-card">

                <div class="stat-icon">
                    🔥
                </div>

                <div class="stat-value">
                    ${data.streak}
                </div>

                <div class="stat-label">
                    Day Streak
                </div>

            </div>

        </div>


        <br>


        <div class="card">

            <h3>
                📚 Subject Progress
            </h3>


            ${subjectStats
                .map(
                    (
                        [
                            subject,
                            value
                        ]
                    ) =>
                        courseProgress(
                            subject,
                            value
                        )
                )
                .join("")}

        </div>


        <br>


        <div class="card">

            <h3>
                📖 Course Completion
            </h3>


            ${Object.keys(
                lessonData
            )
            .map(
                subject => {

                    const lessons =
                        getAllLessons(
                            subject
                        );


                    const completed =
                        (
                            data.lessonProgress[
                                subject
                            ] || []
                        ).length;


                    const progress =
                        calculateLessonProgress(
                            subject
                        );


                    return `

                        <div
                            style="
                                margin-top:18px;
                            ">

                            <div
                                class="course-top">

                                <strong>
                                    ${escapeHTML(
                                        subject
                                    )}
                                </strong>

                                <span>
                                    ${completed}/${lessons.length}
                                    lessons
                                </span>

                            </div>


                            <div class="progress">

                                <div
                                    class="progress-bar"
                                    style="width:${progress}%">
                                </div>

                            </div>

                        </div>

                    `;

                }
            )
            .join("")}

        </div>


        <br>


        <div class="card">

            <h3>
                🎯 Total Activities
            </h3>

            <div class="goal-number">
                ${totalActivities}
            </div>

            <div class="goal-label">
                activities completed
            </div>

        </div>

    `;

}


/* ============================================================
   ACHIEVEMENTS
   ============================================================ */

function renderAchievements() {

    const achievements = [

        {
            icon: "🔥",
            title: "7 Day Streak",
            description:
                "Maintain a 7 day learning streak.",
            unlocked:
                data.streak >= 7
        },

        {
            icon: "🤖",
            title: "AI Explorer",
            description:
                "Ask 10 questions to AI Tutor.",
            unlocked:
                data.stats.questions >= 10
        },

        {
            icon: "📝",
            title: "Quiz Starter",
            description:
                "Complete your first quiz.",
            unlocked:
                data.stats.quizzes >= 1
        },

        {
            icon: "📚",
            title: "First Lesson",
            description:
                "Complete your first lesson.",
            unlocked:
                data.stats.lessons >= 1
        },

        {
            icon: "💻",
            title: "Code Builder",
            description:
                "Run your first coding project.",
            unlocked:
                data.stats.codingProjects >= 1
        },

        {
            icon: "🗣️",
            title: "English Starter",
            description:
                "Complete an English session.",
            unlocked:
                data.stats.englishSessions >= 1
        },

        {
            icon: "📚",
            title: "Study Explorer",
            description:
                "Complete 10 lessons.",
            unlocked:
                data.stats.lessons >= 10
        },

        {
            icon: "🏆",
            title: "Quiz Master",
            description:
                "Complete 10 quizzes.",
            unlocked:
                data.stats.quizzes >= 10
        },

        {
            icon: "⚡",
            title: "Physics Master",
            description:
                "Complete the Physics course.",
            unlocked:
                data.progress.Physics >= 100
        },

        {
            icon: "📐",
            title: "Math Explorer",
            description:
                "Reach 50% Mathematics progress.",
            unlocked:
                data.progress.Mathematics >= 50
        },

        {
            icon: "🧪",
            title: "Chemistry Explorer",
            description:
                "Reach 50% Chemistry progress.",
            unlocked:
                data.progress.Chemistry >= 50
        },

        {
            icon: "💻",
            title: "Coding Explorer",
            description:
                "Reach 50% Coding progress.",
            unlocked:
                data.progress.Coding >= 50
        }

    ];


    pageContent.innerHTML = `

        <div class="page-header">

            <h1>
                🏆 Achievements
            </h1>

            <p>
                Complete activities and unlock
                new achievements.
            </p>

        </div>


        <div class="grid-3">

            ${achievements
                .map(
                    item => `

                        <div
                            class="achievement-card ${
                                item.unlocked
                                    ? "unlocked"
                                    : ""
                            }">

                            <div
                                class="achievement-icon">

                                ${item.icon}

                            </div>

                            <h3>
                                ${escapeHTML(
                                    item.title
                                )}
                            </h3>

                            <p>
                                ${escapeHTML(
                                    item.description
                                )}
                            </p>

                            <br>

                            <small>

                                ${
                                    item.unlocked
                                        ? "✅ Unlocked"
                                        : "🔒 Locked"
                                }

                            </small>

                        </div>

                    `
                )
                .join("")}

        </div>

    `;

}


/* ============================================================
   PROFILE
   ============================================================ */

function renderProfile() {

    pageContent.innerHTML = `

        <div class="page-header">

            <h1>
                👤 Profile
            </h1>

            <p>
                Manage your BharatBuddy learning profile.
            </p>

        </div>


        <div class="profile-card">

            <div class="profile-large-avatar">

                ${
                    escapeHTML(
                        data.profile.name
                            .charAt(0)
                    ).toUpperCase()
                }

            </div>


            <div class="form-group">

                <label class="form-label">
                    Name
                </label>

                <input
                    id="profileName"
                    class="form-input"
                    value="${escapeHTML(
                        data.profile.name
                    )}"
                >

            </div>


            <div class="grid-2">

                <div class="form-group">

                    <label class="form-label">
                        Class
                    </label>

                    <select
                        id="profileClass"
                        class="form-select">

                        ${[
                            "Class 9",
                            "Class 10",
                            "Class 11",
                            "Class 12",
                            "College"
                        ]
                        .map(
                            value => `

                                <option
                                    ${
                                        data.profile.className ===
                                        value
                                            ? "selected"
                                            : ""
                                    }>

                                    ${value}

                                </option>

                            `
                        )
                        .join("")}

                    </select>

                </div>


                <div class="form-group">

                    <label class="form-label">
                        Stream
                    </label>

                    <select
                        id="profileStream"
                        class="form-select">

                        ${[
                            "PCM",
                            "PCB",
                            "Commerce",
                            "Arts",
                            "Computer Science",
                            "Other"
                        ]
                        .map(
                            value => `

                                <option
                                    ${
                                        data.profile.stream ===
                                        value
                                            ? "selected"
                                            : ""
                                    }>

                                    ${value}

                                </option>

                            `
                        )
                        .join("")}

                    </select>

                </div>

            </div>


            <div class="form-group">

                <label class="form-label">
                    Career Goal
                </label>

                <input
                    id="profileGoal"
                    class="form-input"
                    value="${escapeHTML(
                        data.profile.goal
                    )}"
                >

            </div>


            <button
                class="btn btn-primary"
                id="saveProfile">

                💾 Save Profile

            </button>

        </div>

    `;


    document
        .getElementById(
            "saveProfile"
        )
        ?.addEventListener(
            "click",
            saveProfile
        );

}


function saveProfile() {

    const name =
        document.getElementById(
            "profileName"
        );


    const className =
        document.getElementById(
            "profileClass"
        );


    const stream =
        document.getElementById(
            "profileStream"
        );


    const goal =
        document.getElementById(
            "profileGoal"
        );


    data.profile.name =
        name?.value.trim() ||
        "Student";


    data.profile.className =
        className?.value ||
        "Class 11";


    data.profile.stream =
        stream?.value ||
        "PCM";


    data.profile.goal =
        goal?.value.trim() ||
        "Learn, build and grow";


    saveData();


    updateProfileUI();


    showToast(
        "Profile saved successfully ✅"
    );


    renderProfile();

}


/* ============================================================
   SETTINGS
   ============================================================ */

function renderSettings() {

    pageContent.innerHTML = `

        <div class="page-header">

            <h1>
                ⚙️ Settings
            </h1>

            <p>
                Customize your BharatBuddy experience.
            </p>

        </div>


        <div class="card">

            <div class="setting-item">

                <div class="setting-info">

                    <strong>
                        🌙 Dark Mode
                    </strong>

                    <small>
                        Use a darker interface.
                    </small>

                </div>


                <button
                    class="toggle ${
                        data.settings.darkMode
                            ? "active"
                            : ""
                    }"
                    id="darkToggle">
                </button>

            </div>


            <div class="setting-item">

                <div class="setting-info">

                    <strong>
                        📱 Compact Mode
                    </strong>

                    <small>
                        Reduce spacing in the interface.
                    </small>

                </div>


                <button
                    class="toggle ${
                        data.settings.compactMode
                            ? "active"
                            : ""
                    }"
                    id="compactToggle">
                </button>

            </div>


            <div class="setting-item">

                <div class="setting-info">

                    <strong>
                        🗑️ Clear Chat History
                    </strong>

                    <small>
                        Delete saved AI conversations.
                    </small>

                </div>


                <button
                    class="btn btn-danger"
                    id="clearChat">

                    Clear

                </button>

            </div>


            <div class="setting-item">

                <div class="setting-info">

                    <strong>
                        🏆 Clear Quiz History
                    </strong>

                    <small>
                        Delete all saved quiz attempts.
                    </small>

                </div>


                <button
                    class="btn btn-danger"
                    id="clearQuizHistorySettings">

                    Clear

                </button>

            </div>


            <div class="setting-item">

                <div class="setting-info">

                    <strong>
                        🔄 Reset App Data
                    </strong>

                    <small>
                        Reset local profile and progress.
                    </small>

                </div>


                <button
                    class="btn btn-danger"
                    id="resetApp">

                    Reset

                </button>

            </div>


            <div class="setting-item">

                <div class="setting-info">

                    <strong>
                        ✨ Premium
                    </strong>

                    <small>
                        Advanced learning tools and
                        career features.
                    </small>

                </div>


                <button
                    class="btn btn-primary"
                    id="premiumButton">

                    Explore

                </button>

            </div>

        </div>

    `;


    document
        .getElementById(
            "darkToggle"
        )
        ?.addEventListener(
            "click",
            toggleDarkMode
        );


    document
        .getElementById(
            "compactToggle"
        )
        ?.addEventListener(
            "click",
            toggleCompactMode
        );


    document
        .getElementById(
            "clearChat"
        )
        ?.addEventListener(
            "click",
            clearChat
        );


    document
        .getElementById(
            "clearQuizHistorySettings"
        )
        ?.addEventListener(
            "click",
            clearQuizHistory
        );


    document
        .getElementById(
            "resetApp"
        )
        ?.addEventListener(
            "click",
            resetApp
        );


    document
        .getElementById(
            "premiumButton"
        )
        ?.addEventListener(
            "click",
            () => {

                showToast(
                    "✨ Premium payment system can be connected with a real payment provider."
                );

            }
        );

}


function toggleDarkMode() {

    data.settings.darkMode =
        !data.settings.darkMode;


    document.body.classList.toggle(
        "dark",
        data.settings.darkMode
    );


    saveData();


    renderSettings();

}


function toggleCompactMode() {

    data.settings.compactMode =
        !data.settings.compactMode;


    document.body.classList.toggle(
        "compact",
        data.settings.compactMode
    );


    saveData();


    renderSettings();

}


function clearChat() {

    if (
        !confirm(
            "AI chat history delete karni hai?"
        )
    ) {

        return;

    }


    data.chatHistory =
        [];


    saveData();


    showToast(
        "Chat history cleared."
    );


    renderSettings();

}


function resetApp() {

    if (
        !confirm(
            "All local BharatBuddy data reset karna hai?"
        )
    ) {

        return;

    }


    stopQuizTimer();


    activeQuiz =
        null;


    activeChapterTest =
        null;


    studyState = {

        subject:
            "Physics",

        chapter:
            "Units & Measurements",

        lessonIndex:
            0

    };


    data =
        structuredClone(
            defaultData
        );


    saveData();


    updateProfileUI();


    document.body.classList.remove(
        "dark",
        "compact"
    );


    showToast(
        "App data reset ho gaya."
    );


    renderHome();

}


/* ============================================================
   INITIALIZATION
   ============================================================ */

function initializeApp() {

    ensureStudyProgress();


    document.body.classList.toggle(
        "dark",
        data.settings.darkMode
    );


    document.body.classList.toggle(
        "compact",
        data.settings.compactMode
    );


    updateProfileUI();


    openPage(
        "home"
    );

}


initializeApp();


/* ============================================================
   END OF BHARATBUDDY SCRIPT
   ============================================================ */
   /* ============================================================
   BHARATBUDDY — ADVANCED LESSON SYSTEM
   PASTE THIS ENTIRE BLOCK AT THE VERY END OF script.js
   ============================================================ */

(function () {

    "use strict";

    /* ---------------------------------------------------------
       LESSON SYSTEM STATE
       --------------------------------------------------------- */

    const BB_LESSON_STATE_KEY = "bharatbuddy_lesson_state";

    let bbLessonState = {
        subject: null,
        chapter: null,
        lessonIndex: 0
    };


    /* ---------------------------------------------------------
       LOAD SAVED LESSON STATE
       --------------------------------------------------------- */

    try {

        const saved =
            localStorage.getItem(
                BB_LESSON_STATE_KEY
            );

        if (saved) {

            const parsed =
                JSON.parse(saved);

            if (parsed && typeof parsed === "object") {

                bbLessonState = {
                    subject:
                        parsed.subject || null,

                    chapter:
                        parsed.chapter || null,

                    lessonIndex:
                        Number(
                            parsed.lessonIndex || 0
                        )
                };

            }

        }

    } catch (error) {

        console.warn(
            "BharatBuddy lesson state could not be loaded.",
            error
        );

    }


    /* ---------------------------------------------------------
       SAVE LESSON STATE
       --------------------------------------------------------- */

    function bbSaveLessonState() {

        try {

            localStorage.setItem(
                BB_LESSON_STATE_KEY,
                JSON.stringify(
                    bbLessonState
                )
            );

        } catch (error) {

            console.warn(
                "Lesson state could not be saved.",
                error
            );

        }

    }


    /* ---------------------------------------------------------
       SAFE HTML
       --------------------------------------------------------- */

    function bbEscape(value) {

        const text =
            String(
                value == null
                    ? ""
                    : value
            );

        return text
            .replaceAll("&", "&amp;")
            .replaceAll("<", "&lt;")
            .replaceAll(">", "&gt;")
            .replaceAll('"', "&quot;")
            .replaceAll("'", "&#039;");

    }


    /* ---------------------------------------------------------
       GET ALL SUBJECTS
       --------------------------------------------------------- */

    function bbGetSubjects() {

        if (
            typeof lessonData !== "object" ||
            lessonData === null
        ) {

            return [];

        }

        return Object.keys(
            lessonData
        );

    }


    /* ---------------------------------------------------------
       GET CHAPTERS
       --------------------------------------------------------- */

    function bbGetChapters(subject) {

        if (
            !lessonData ||
            !lessonData[subject]
        ) {

            return [];

        }

        return Object.keys(
            lessonData[subject]
        );

    }


    /* ---------------------------------------------------------
       GET LESSONS
       --------------------------------------------------------- */

    function bbGetLessons(
        subject,
        chapter
    ) {

        if (
            !lessonData ||
            !lessonData[subject] ||
            !lessonData[subject][chapter]
        ) {

            return [];

        }

        return Array.isArray(
            lessonData[subject][chapter]
        )
            ? lessonData[subject][chapter]
            : [];

    }


    /* ---------------------------------------------------------
       LESSON PROGRESS STORAGE
       --------------------------------------------------------- */

    function bbEnsureProgress() {

        if (
            typeof data === "undefined" ||
            !data
        ) {

            return;

        }

        if (
            !data.lessonProgress ||
            typeof data.lessonProgress !== "object"
        ) {

            data.lessonProgress = {};

        }

    }


    function bbChapterProgress(
        subject,
        chapter
    ) {

        bbEnsureProgress();

        const lessons =
            bbGetLessons(
                subject,
                chapter
            );

        if (!lessons.length) {

            return 0;

        }

        const completed =
            lessons.filter(
                (_, index) =>
                    bbIsLessonCompleted(
                        subject,
                        chapter,
                        index
                    )
            ).length;

        return Math.round(
            (
                completed /
                lessons.length
            ) * 100
        );

    }


    function bbIsLessonCompleted(
        subject,
        chapter,
        index
    ) {

        bbEnsureProgress();

        const key =
            subject +
            "::" +
            chapter;

        const stored =
            data.lessonProgress[key];

        if (Array.isArray(stored)) {

            return stored.includes(
                Number(index)
            );

        }

        return false;

    }


    function bbMarkLessonComplete(
        subject,
        chapter,
        index
    ) {

        bbEnsureProgress();

        const key =
            subject +
            "::" +
            chapter;

        if (
            !Array.isArray(
                data.lessonProgress[key]
            )
        ) {

            data.lessonProgress[key] = [];

        }

        if (
            !data.lessonProgress[key]
                .includes(
                    Number(index)
                )
        ) {

            data.lessonProgress[key].push(
                Number(index)
            );

            data.lessonProgress[key].sort(
                (a, b) => a - b
            );

            if (
                data.stats &&
                typeof data.stats.lessons === "number"
            ) {

                data.stats.lessons++;

            }

        }

        saveData();

    }


    /* ---------------------------------------------------------
       TOTAL SUBJECT PROGRESS
       --------------------------------------------------------- */

    function bbSubjectProgress(
        subject
    ) {

        const chapters =
            bbGetChapters(
                subject
            );

        let total = 0;
        let completed = 0;

        chapters.forEach(
            chapter => {

                const lessons =
                    bbGetLessons(
                        subject,
                        chapter
                    );

                total +=
                    lessons.length;

                lessons.forEach(
                    (_, index) => {

                        if (
                            bbIsLessonCompleted(
                                subject,
                                chapter,
                                index
                            )
                        ) {

                            completed++;

                        }

                    }
                );

            }
        );

        if (!total) {

            return 0;

        }

        return Math.round(
            (
                completed /
                total
            ) * 100
        );

    }


    /* ---------------------------------------------------------
       MAIN STUDY HOME
       --------------------------------------------------------- */

    function bbRenderStudyHome() {

        const page =
            document.getElementById(
                "pageContent"
            );

        if (!page) return;


        const subjects =
            bbGetSubjects();


        page.innerHTML = `

            <div class="page-header">

                <h1>
                    📚 Study
                </h1>

                <p>
                    Learn step-by-step with structured
                    lessons, examples and practice.
                </p>

            </div>


            <div
                class="grid-3"
                id="bbSubjectGrid">

                ${
                    subjects.length
                        ? subjects
                            .map(
                                subject => {

                                    const chapters =
                                        bbGetChapters(
                                            subject
                                        );

                                    const lessonCount =
                                        chapters.reduce(
                                            (
                                                total,
                                                chapter
                                            ) =>
                                                total +
                                                bbGetLessons(
                                                    subject,
                                                    chapter
                                                ).length,
                                            0
                                        );

                                    const progress =
                                        bbSubjectProgress(
                                            subject
                                        );

                                    const icon =
                                        subject === "Physics"
                                            ? "⚡"
                                            : subject === "Mathematics"
                                                ? "📐"
                                                : subject === "Chemistry"
                                                    ? "🧪"
                                                    : subject === "Computer Science"
                                                        ? "💻"
                                                        : subject === "English"
                                                            ? "📖"
                                                            : "📚";

                                    return `

                                        <div
                                            class="subject-card"
                                            data-bb-subject="${bbEscape(subject)}"
                                            style="cursor:pointer;">

                                            <div
                                                style="
                                                    font-size:42px;
                                                    margin-bottom:12px;
                                                ">

                                                ${icon}

                                            </div>

                                            <h3>
                                                ${bbEscape(subject)}
                                            </h3>

                                            <p>
                                                ${chapters.length}
                                                chapters •
                                                ${lessonCount}
                                                lessons
                                            </p>

                                            <div
                                                class="progress"
                                                style="margin-top:14px;">

                                                <div
                                                    class="progress-bar"
                                                    style="
                                                        width:${progress}%;
                                                    ">
                                                </div>

                                            </div>

                                            <small
                                                style="
                                                    display:block;
                                                    margin-top:8px;
                                                ">

                                                ${progress}% complete

                                            </small>

                                            <button
                                                class="btn btn-primary"
                                                data-bb-open-subject="${bbEscape(subject)}"
                                                style="
                                                    width:100%;
                                                    margin-top:14px;
                                                ">

                                                📖 Start Learning

                                            </button>

                                        </div>

                                    `;

                                }
                            )
                            .join("")
                        : `

                            <div class="card">

                                <h3>
                                    📚 No Study Content
                                </h3>

                                <p>
                                    Add lessons to lessonData
                                    to start learning.
                                </p>

                            </div>

                        `
                }

            </div>

        `;


        page
            .querySelectorAll(
                "[data-bb-open-subject]"
            )
            .forEach(
                button => {

                    button.addEventListener(
                        "click",
                        event => {

                            event.stopPropagation();

                            bbRenderChapters(
                                button.dataset.bbOpenSubject
                            );

                        }
                    );

                }
            );


        page
            .querySelectorAll(
                "[data-bb-subject]"
            )
            .forEach(
                card => {

                    card.addEventListener(
                        "click",
                        () => {

                            bbRenderChapters(
                                card.dataset.bbSubject
                            );

                        }
                    );

                }
            );

    }


    /* ---------------------------------------------------------
       CHAPTER SCREEN
       --------------------------------------------------------- */

    function bbRenderChapters(
        subject
    ) {

        const page =
            document.getElementById(
                "pageContent"
            );

        if (!page) return;


        const chapters =
            bbGetChapters(
                subject
            );


        page.innerHTML = `

            <div class="page-header">

                <button
                    class="btn btn-secondary"
                    id="bbBackSubjects">

                    ← All Subjects

                </button>

                <br><br>

                <h1>
                    ${bbEscape(subject)}
                </h1>

                <p>
                    Choose a chapter to begin learning.
                </p>

            </div>


            <div
                style="
                    display:flex;
                    flex-direction:column;
                    gap:14px;
                ">

                ${
                    chapters
                        .map(
                            (
                                chapter,
                                chapterIndex
                            ) => {

                                const lessons =
                                    bbGetLessons(
                                        subject,
                                        chapter
                                    );

                                const progress =
                                    bbChapterProgress(
                                        subject,
                                        chapter
                                    );

                                return `

                                    <div
                                        class="card"
                                        style="cursor:pointer;"
                                        data-bb-chapter="${bbEscape(chapter)}">

                                        <div
                                            style="
                                                display:flex;
                                                justify-content:space-between;
                                                align-items:center;
                                                gap:15px;
                                                flex-wrap:wrap;
                                            ">

                                            <div>

                                                <small>
                                                    Chapter ${chapterIndex + 1}
                                                </small>

                                                <h3
                                                    style="
                                                        margin-top:5px;
                                                    ">

                                                    ${bbEscape(chapter)}

                                                </h3>

                                                <p>
                                                    ${lessons.length}
                                                    lessons
                                                </p>

                                            </div>

                                            <div
                                                style="
                                                    font-size:28px;
                                                ">

                                                ${
                                                    progress >= 100
                                                        ? "✅"
                                                        : "📖"
                                                }

                                            </div>

                                        </div>

                                        <div
                                            class="progress"
                                            style="margin-top:12px;">

                                            <div
                                                class="progress-bar"
                                                style="
                                                    width:${progress}%;
                                                ">
                                            </div>

                                        </div>

                                        <div
                                            style="
                                                margin-top:8px;
                                                font-size:13px;
                                                opacity:.75;
                                            ">

                                            ${progress}% complete

                                        </div>

                                    </div>

                                `;

                            }
                        )
                        .join("")
                }

            </div>

        `;


        document
            .getElementById(
                "bbBackSubjects"
            )
            ?.addEventListener(
                "click",
                bbRenderStudyHome
            );


        page
            .querySelectorAll(
                "[data-bb-chapter]"
            )
            .forEach(
                card => {

                    card.addEventListener(
                        "click",
                        () => {

                            bbRenderLessonList(
                                subject,
                                card.dataset.bbChapter
                            );

                        }
                    );

                }
            );

    }


    /* ---------------------------------------------------------
       LESSON LIST
       --------------------------------------------------------- */

    function bbRenderLessonList(
        subject,
        chapter
    ) {

        const page =
            document.getElementById(
                "pageContent"
            );

        if (!page) return;


        const lessons =
            bbGetLessons(
                subject,
                chapter
            );


        page.innerHTML = `

            <div class="page-header">

                <button
                    class="btn btn-secondary"
                    id="bbBackChapters">

                    ← Chapters

                </button>

                <br><br>

                <h1>
                    ${bbEscape(chapter)}
                </h1>

                <p>
                    Complete the lessons in order.
                </p>

            </div>


            <div
                style="
                    display:flex;
                    flex-direction:column;
                    gap:12px;
                ">

                ${
                    lessons
                        .map(
                            (
                                lesson,
                                index
                            ) => {

                                const completed =
                                    bbIsLessonCompleted(
                                        subject,
                                        chapter,
                                        index
                                    );

                                const locked =
                                    index > 0 &&
                                    !bbIsLessonCompleted(
                                        subject,
                                        chapter,
                                        index - 1
                                    );

                                return `

                                    <div
                                        class="card"
                                        data-bb-lesson-index="${index}"
                                        style="
                                            cursor:${
                                                locked
                                                    ? "not-allowed"
                                                    : "pointer"
                                            };
                                            opacity:${
                                                locked
                                                    ? ".6"
                                                    : "1"
                                            };
                                        ">

                                        <div
                                            style="
                                                display:flex;
                                                align-items:center;
                                                gap:14px;
                                            ">

                                            <div
                                                style="
                                                    min-width:42px;
                                                    width:42px;
                                                    height:42px;
                                                    border-radius:50%;
                                                    display:flex;
                                                    align-items:center;
                                                    justify-content:center;
                                                    background:${
                                                        completed
                                                            ? "rgba(22,163,74,.15)"
                                                            : "rgba(37,99,235,.12)"
                                                    };
                                                    font-weight:700;
                                                ">

                                                ${
                                                    completed
                                                        ? "✓"
                                                        : index + 1
                                                }

                                            </div>

                                            <div
                                                style="flex:1;">

                                                <small>
                                                    Lesson ${index + 1}
                                                </small>

                                                <h3
                                                    style="
                                                        margin-top:4px;
                                                    ">

                                                    ${bbEscape(
                                                        lesson.title ||
                                                        "Lesson " +
                                                        (index + 1)
                                                    )}

                                                </h3>

                                            </div>

                                            <div>

                                                ${
                                                    completed
                                                        ? "✅"
                                                        : locked
                                                            ? "🔒"
                                                            : "▶️"
                                                }

                                            </div>

                                        </div>

                                    </div>

                                `;

                            }
                        )
                        .join("")
                }

            </div>

        `;


        document
            .getElementById(
                "bbBackChapters"
            )
            ?.addEventListener(
                "click",
                () => {

                    bbRenderChapters(
                        subject
                    );

                }
            );


        page
            .querySelectorAll(
                "[data-bb-lesson-index]"
            )
            .forEach(
                card => {

                    card.addEventListener(
                        "click",
                        () => {

                            const index =
                                Number(
                                    card.dataset.bbLessonIndex
                                );

                            if (
                                index > 0 &&
                                !bbIsLessonCompleted(
                                    subject,
                                    chapter,
                                    index - 1
                                )
                            ) {

                                if (
                                    typeof showToast ===
                                    "function"
                                ) {

                                    showToast(
                                        "Pehle previous lesson complete karo 🔒"
                                    );

                                }

                                return;

                            }

                            bbOpenLesson(
                                subject,
                                chapter,
                                index
                            );

                        }
                    );

                }
            );

    }


    /* ---------------------------------------------------------
       OPEN LESSON
       --------------------------------------------------------- */

    function bbOpenLesson(
        subject,
        chapter,
        index
    ) {

        const lessons =
            bbGetLessons(
                subject,
                chapter
            );

        if (!lessons.length) return;


        if (
            index < 0
        ) {

            index = 0;

        }


        if (
            index >= lessons.length
        ) {

            index =
                lessons.length - 1;

        }


        bbLessonState = {

            subject,
            chapter,
            lessonIndex: index

        };


        bbSaveLessonState();


        bbRenderLesson(
            subject,
            chapter,
            index
        );

    }


    /* ---------------------------------------------------------
       LESSON VIEW
       --------------------------------------------------------- */

    function bbRenderLesson(
        subject,
        chapter,
        index
    ) {

        const page =
            document.getElementById(
                "pageContent"
            );

        if (!page) return;


        const lessons =
            bbGetLessons(
                subject,
                chapter
            );


        const lesson =
            lessons[index];

        if (!lesson) return;


        const completed =
            bbIsLessonCompleted(
                subject,
                chapter,
                index
            );


        const progress =
            Math.round(
                (
                    (
                        index + 1
                    ) /
                    lessons.length
                ) * 100
            );


        const lessonContent =
            lesson.content ||
            `
                <h3>
                    ${bbEscape(
                        lesson.title ||
                        "Lesson"
                    )}
                </h3>

                <p>
                    Is lesson ka detailed content
                    jaldi add kiya jayega.
                </p>
            `;


        page.innerHTML = `

            <div
                style="
                    max-width:900px;
                    margin:0 auto;
                ">

                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        align-items:center;
                        gap:10px;
                        flex-wrap:wrap;
                        margin-bottom:18px;
                    ">

                    <button
                        class="btn btn-secondary"
                        id="bbLessonBack">

                        ← Lessons

                    </button>

                    <div
                        style="
                            font-size:13px;
                            opacity:.75;
                        ">

                        ${bbEscape(subject)}
                        •
                        ${bbEscape(chapter)}

                    </div>

                </div>


                <div
                    class="card"
                    style="
                        padding:22px;
                        margin-bottom:18px;
                    ">

                    <div
                        style="
                            display:flex;
                            justify-content:space-between;
                            align-items:center;
                            gap:12px;
                        ">

                        <div>

                            <small>
                                Lesson ${index + 1}
                                of ${lessons.length}
                            </small>

                            <h1
                                style="
                                    margin-top:7px;
                                ">

                                ${bbEscape(
                                    lesson.title ||
                                    "Lesson"
                                )}

                            </h1>

                        </div>

                        <div
                            style="
                                font-size:32px;
                            ">

                            ${
                                completed
                                    ? "✅"
                                    : "📖"
                            }

                        </div>

                    </div>


                    <div
                        class="progress"
                        style="
                            margin-top:18px;
                        ">

                        <div
                            class="progress-bar"
                            style="
                                width:${progress}%;
                            ">
                        </div>

                    </div>


                    <small
                        style="
                            display:block;
                            margin-top:7px;
                            opacity:.7;
                        ">

                        Lesson ${index + 1}
                        / ${lessons.length}
                        • ${progress}%

                    </small>

                </div>


                <article
                    class="card"
                    style="
                        line-height:1.8;
                        font-size:16px;
                    ">

                    ${lessonContent}

                </article>


                <div
                    class="card"
                    style="
                        margin-top:18px;
                        padding:18px;
                    ">

                    <h3>
                        🎯 Lesson Check
                    </h3>

                    <p
                        style="
                            margin-top:7px;
                            opacity:.8;
                        ">

                        Lesson ko complete mark karne ke
                        baad next lesson unlock hoga.

                    </p>


                    <button
                        class="btn ${
                            completed
                                ? "btn-secondary"
                                : "btn-primary"
                        }"
                        id="bbCompleteLesson"
                        style="
                            margin-top:12px;
                        ">

                        ${
                            completed
                                ? "✅ Completed"
                                : "✓ Mark Lesson Complete"
                        }

                    </button>

                </div>


                <div
                    style="
                        display:flex;
                        justify-content:space-between;
                        gap:10px;
                        margin-top:18px;
                    ">

                    <button
                        class="btn btn-secondary"
                        id="bbPreviousLesson"
                        ${
                            index === 0
                                ? "disabled"
                                : ""
                        }>

                        ← Previous

                    </button>


                    <button
                        class="btn btn-primary"
                        id="bbNextLesson">

                        ${
                            index === lessons.length - 1
                                ? "🏆 Finish Chapter"
                                : "Next Lesson →"
                        }

                    </button>

                </div>

            </div>

        `;


        document
            .getElementById(
                "bbLessonBack"
            )
            ?.addEventListener(
                "click",
                () => {

                    bbRenderLessonList(
                        subject,
                        chapter
                    );

                }
            );


        document
            .getElementById(
                "bbPreviousLesson"
            )
            ?.addEventListener(
                "click",
                () => {

                    if (index > 0) {

                        bbOpenLesson(
                            subject,
                            chapter,
                            index - 1
                        );

                    }

                }
            );


        document
            .getElementById(
                "bbCompleteLesson"
            )
            ?.addEventListener(
                "click",
                () => {

                    if (!completed) {

                        bbMarkLessonComplete(
                            subject,
                            chapter,
                            index
                        );

                        if (
                            typeof showToast ===
                            "function"
                        ) {

                            showToast(
                                "Lesson completed! 🎉"
                            );

                        }

                        bbRenderLesson(
                            subject,
                            chapter,
                            index
                        );

                    }

                }
            );


        document
            .getElementById(
                "bbNextLesson"
            )
            ?.addEventListener(
                "click",
                () => {

                    if (!bbIsLessonCompleted(
                        subject,
                        chapter,
                        index
                    )) {

                        if (
                            typeof showToast ===
                            "function"
                        ) {

                            showToast(
                                "Pehle lesson complete karo ✓"
                            );

                        }

                        return;

                    }


                    if (
                        index <
                        lessons.length - 1
                    ) {

                        bbOpenLesson(
                            subject,
                            chapter,
                            index + 1
                        );

                    } else {

                        bbShowChapterComplete(
                            subject,
                            chapter
                        );

                    }

                }
            );

    }


    /* ---------------------------------------------------------
       CHAPTER COMPLETE
       --------------------------------------------------------- */

    function bbShowChapterComplete(
        subject,
        chapter
    ) {

        const page =
            document.getElementById(
                "pageContent"
            );

        if (!page) return;


        page.innerHTML = `

            <div
                class="card"
                style="
                    max-width:750px;
                    margin:40px auto;
                    text-align:center;
                    padding:40px 25px;
                ">

                <div
                    style="
                        font-size:70px;
                    ">

                    🏆

                </div>

                <h1
                    style="
                        margin-top:12px;
                    ">

                    Chapter Complete!

                </h1>

                <p
                    style="
                        margin-top:10px;
                        font-size:17px;
                    ">

                    Tumne
                    <strong>
                        ${bbEscape(chapter)}
                    </strong>
                    complete kar liya! 🎉

                </p>


                <div
                    style="
                        margin-top:22px;
                    ">

                    <div
                        class="progress">

                        <div
                            class="progress-bar"
                            style="width:100%;">
                        </div>

                    </div>

                    <strong
                        style="
                            display:block;
                            margin-top:8px;
                        ">

                        100% Complete

                    </strong>

                </div>


                <div
                    style="
                        display:flex;
                        justify-content:center;
                        gap:10px;
                        flex-wrap:wrap;
                        margin-top:25px;
                    ">

                    <button
                        class="btn btn-primary"
                        id="bbChapterLessons">

                        📖 Review Lessons

                    </button>

                    <button
                        class="btn btn-secondary"
                        id="bbChapterList">

                        📚 Back to Chapters

                    </button>

                </div>

            </div>

        `;


        document
            .getElementById(
                "bbChapterLessons"
            )
            ?.addEventListener(
                "click",
                () => {

                    bbRenderLessonList(
                        subject,
                        chapter
                    );

                }
            );


        document
            .getElementById(
                "bbChapterList"
            )
            ?.addEventListener(
                "click",
                () => {

                    bbRenderChapters(
                        subject
                    );

                }
            );

    }


    /* ---------------------------------------------------------
       CONTINUE LEARNING
       --------------------------------------------------------- */

    function bbContinueLearning() {

        if (
            bbLessonState.subject &&
            bbLessonState.chapter
        ) {

            const lessons =
                bbGetLessons(
                    bbLessonState.subject,
                    bbLessonState.chapter
                );

            if (lessons.length) {

                let index =
                    Number(
                        bbLessonState.lessonIndex || 0
                    );

                while (
                    index < lessons.length &&
                    bbIsLessonCompleted(
                        bbLessonState.subject,
                        bbLessonState.chapter,
                        index
                    )
                ) {

                    index++;

                }

                if (
                    index >= lessons.length
                ) {

                    index =
                        lessons.length - 1;

                }

                bbOpenLesson(
                    bbLessonState.subject,
                    bbLessonState.chapter,
                    index
                );

                return;

            }

        }


        const subjects =
            bbGetSubjects();


        if (subjects.length) {

            const firstSubject =
                subjects[0];

            const chapters =
                bbGetChapters(
                    firstSubject
                );

            if (chapters.length) {

                bbOpenLesson(
                    firstSubject,
                    chapters[0],
                    0
                );

                return;

            }

        }


        bbRenderStudyHome();

    }


    /* ---------------------------------------------------------
       EXPOSE FUNCTIONS
       --------------------------------------------------------- */

    window.BharatBuddyLessons = {

        open:
            bbOpenLesson,

        study:
            bbRenderStudyHome,

        chapters:
            bbRenderChapters,

        lessons:
            bbRenderLessonList,

        continue:
            bbContinueLearning,

        progress:
            bbSubjectProgress

    };


    /* ---------------------------------------------------------
       OPTIONAL STUDY NAVIGATION CONNECTION
       --------------------------------------------------------- */

    function bbConnectStudyNavigation() {

        const possibleButtons =
            document.querySelectorAll(
                "a, button, [data-page], [data-nav]"
            );


        possibleButtons.forEach(
            element => {

                const text =
                    (
                        element.textContent ||
                        ""
                    )
                    .trim()
                    .toLowerCase();


                const page =
                    (
                        element.dataset.page ||
                        element.dataset.nav ||
                        ""
                    )
                    .toLowerCase();


                if (
                    text === "study" ||
                    text.includes("📚 study") ||
                    page === "study"
                ) {

                    if (
                        !element.dataset.bbLessonConnected
                    ) {

                        element.dataset.bbLessonConnected =
                            "true";


                        element.addEventListener(
                            "click",
                            event => {

                                event.preventDefault();

                                bbRenderStudyHome();

                            }
                        );

                    }

                }

            }
        );

    }


    /* ---------------------------------------------------------
       START CONNECTION
       --------------------------------------------------------- */

    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            bbConnectStudyNavigation
        );

    } else {

        bbConnectStudyNavigation();

    }


})();
/* ============================================================
   BHARATBUDDY AI — SMART NCERT STUDY ADD-ON
   DO NOT DELETE EXISTING CODE
   Paste at the VERY END of script.js
   ============================================================ */

(function () {
    "use strict";

    const BB_STUDY_API =
        "https://bharatbuddy-ai-36i4.onrender.com/api/chat";

    /*
       NCERT-ALIGNED CLASS + STREAM SUBJECT MAP
    */

    const BB_NCERT = {

        "Class 9": {
            "All": [
                "Mathematics",
                "Science",
                "Social Science",
                "English"
            ]
        },

        "Class 10": {
            "All": [
                "Mathematics",
                "Science",
                "Social Science",
                "English"
            ]
        },

        "Class 11": {

            "PCM": [
                "Physics",
                "Chemistry",
                "Mathematics",
                "English",
                "Computer Science"
            ],

            "PCB": [
                "Physics",
                "Chemistry",
                "Biology",
                "English",
                "Computer Science"
            ],

            "Commerce": [
                "Accountancy",
                "Business Studies",
                "Economics",
                "English",
                "Mathematics"
            ],

            "Arts": [
                "History",
                "Political Science",
                "Geography",
                "Economics",
                "English",
                "Sociology"
            ],

            "Computer Science": [
                "Computer Science",
                "Mathematics",
                "Physics",
                "English"
            ],

            "Other": [
                "English",
                "Mathematics",
                "Computer Science"
            ]
        },

        "Class 12": {

            "PCM": [
                "Physics",
                "Chemistry",
                "Mathematics",
                "English",
                "Computer Science"
            ],

            "PCB": [
                "Physics",
                "Chemistry",
                "Biology",
                "English",
                "Computer Science"
            ],

            "Commerce": [
                "Accountancy",
                "Business Studies",
                "Economics",
                "English",
                "Mathematics"
            ],

            "Arts": [
                "History",
                "Political Science",
                "Geography",
                "Economics",
                "English",
                "Sociology"
            ],

            "Computer Science": [
                "Computer Science",
                "Mathematics",
                "Physics",
                "English"
            ],

            "Other": [
                "English",
                "Mathematics",
                "Computer Science"
            ]
        }
    };


    /* ---------------------------------------------------------
       GET CURRENT PROFILE
    --------------------------------------------------------- */

    function bbGetProfile() {

        try {

            return {
                className:
                    data?.profile?.className ||
                    "Class 11",

                stream:
                    data?.profile?.stream ||
                    "PCM"
            };

        } catch {

            return {
                className: "Class 11",
                stream: "PCM"
            };
        }
    }


    /* ---------------------------------------------------------
       GET ALLOWED SUBJECTS
    --------------------------------------------------------- */

    function bbGetSubjects() {

        const profile =
            bbGetProfile();

        const className =
            profile.className;

        const stream =
            profile.stream;

        const classData =
            BB_NCERT[className];

        if (!classData) {

            return [
                "Physics",
                "Chemistry",
                "Mathematics"
            ];
        }

        if (className === "Class 9" ||
            className === "Class 10") {

            return classData.All || [];
        }

        return classData[stream] ||
               classData["Other"] ||
               [];
    }


    /* ---------------------------------------------------------
       CREATE REAL AI STUDY REQUEST
    --------------------------------------------------------- */

    async function bbGenerateStudy(
        subject,
        chapter
    ) {

        const profile =
            bbGetProfile();

        const prompt = `

You are BharatBuddy AI Study Engine.

Create ORIGINAL NCERT-ALIGNED study material.

Student:
Class: ${profile.className}
Stream: ${profile.stream}
Subject: ${subject}
Chapter: ${chapter}

IMPORTANT:

1. Follow the NCERT syllabus/chapter structure as closely as possible.
2. Do NOT copy NCERT textbook wording.
3. Write completely original explanations.
4. Do not invent a chapter that does not belong to the selected class and subject.
5. Keep the level appropriate for the student's class.

Return HTML only.

Required structure:

<h2>Chapter Overview</h2>

<h3>1. Concept Explanation</h3>
Detailed easy explanation.

<h3>2. Important Definitions</h3>
Use bullet points.

<h3>3. Important Formulas</h3>
Only where applicable.

<h3>4. Derivations</h3>
Explain important derivations step-by-step where applicable.

<h3>5. Examples</h3>
Give original examples.

<h3>6. Solved Questions</h3>
Give properly solved questions.

<h3>7. Important Points</h3>
Give revision points.

<h3>8. MCQs</h3>
Give 5 MCQs with answers.

<h3>9. Very Short Questions</h3>
Give 5 questions with answers.

<h3>10. Short Answer Questions</h3>
Give 5 questions with answers.

<h3>11. Long Answer Questions</h3>
Give 3 questions with answers.

<h3>12. Numerical Questions</h3>
For Physics/Maths/Chemistry where applicable,
give solved numerical questions.

<h3>13. Quick Revision</h3>
Give a concise revision section.

Use simple student-friendly language.
Do not mention that this is a demo.
`;

        const response =
            await fetch(
                BB_STUDY_API,
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body: JSON.stringify({
                        message: prompt
                    })
                }
            );

        let result = {};

        try {
            result =
                await response.json();
        } catch {
            result = {};
        }

        if (!response.ok) {

            throw new Error(
                result.error ||
                "Study AI unavailable."
            );
        }

        return (
            result.reply ||
            result.answer ||
            result.output_text ||
            ""
        );
    }


    /* ---------------------------------------------------------
       NCERT SUBJECT FILTER
       Existing lessonData is NOT modified.
    --------------------------------------------------------- */

    function bbApplySubjectFilter() {

        const allowed =
            bbGetSubjects();

        const profile =
            bbGetProfile();

        const studyContainer =
            document.querySelector(
                "#studyPage"
            ) ||
            document.querySelector(
                "[data-page='study']"
            );

        /*
          We don't delete existing lessonData.
          We only hide subjects which don't belong
          to the selected class/stream.
        */

        document
            .querySelectorAll(
                "[data-subject]"
            )
            .forEach(button => {

                const subject =
                    button.dataset.subject;

                if (!subject) return;

                const shouldShow =
                    allowed.includes(subject);

                button.style.display =
                    shouldShow
                        ? ""
                        : "none";
            });

        console.log(
            "BharatBuddy Study Profile:",
            profile.className,
            profile.stream
        );

        console.log(
            "Allowed Subjects:",
            allowed
        );
    }


    /* ---------------------------------------------------------
       ADD CLASS / STREAM INFORMATION
    --------------------------------------------------------- */

    function bbShowStudyProfile() {

        const profile =
            bbGetProfile();

        const subjects =
            bbGetSubjects();

        const existing =
            document.getElementById(
                "bbStudyProfileInfo"
            );

        if (existing) {

            existing.innerHTML = `
                <strong>
                    ${profile.className}
                </strong>
                ${
                    profile.className === "Class 9" ||
                    profile.className === "Class 10"
                        ? ""
                        : ` • ${profile.stream}`
                }
                <br>
                <small>
                    Subjects: ${subjects.join(", ")}
                </small>
            `;

            return;
        }

        const studyHeading =
            document.querySelector(
                "#studyPage h1"
            );

        if (!studyHeading) return;

        const box =
            document.createElement("div");

        box.id =
            "bbStudyProfileInfo";

        box.style.cssText = `
            margin:12px 0 18px;
            padding:14px 16px;
            border-radius:14px;
            background:rgba(99,102,241,.10);
            border:1px solid rgba(99,102,241,.20);
            line-height:1.6;
        `;

        box.innerHTML = `
            <strong>
                ${profile.className}
            </strong>
            ${
                profile.className === "Class 9" ||
                profile.className === "Class 10"
                    ? ""
                    : ` • ${profile.stream}`
            }
            <br>

            <small>
                Subjects:
                ${subjects.join(", ")}
            </small>
        `;

        studyHeading
            .parentNode
            .insertBefore(
                box,
                studyHeading.nextSibling
            );
    }


    /* ---------------------------------------------------------
       AI CHAPTER CONTENT BUTTON
    --------------------------------------------------------- */

    window.BharatBuddyStudyAI = {

        generate: async function (
            subject,
            chapter
        ) {

            return await bbGenerateStudy(
                subject,
                chapter
            );
        },

        subjects: function () {

            return bbGetSubjects();
        },

        profile: function () {

            return bbGetProfile();
        }
    };


    /* ---------------------------------------------------------
       CREATE AI STUDY BUTTON
    --------------------------------------------------------- */

    function bbAddAIStudyButton() {

        if (
            document.getElementById(
                "bbAIStudyButton"
            )
        ) return;

        const area =
            document.getElementById(
                "currentLessonArea"
            );

        if (!area) return;

        const button =
            document.createElement(
                "button"
            );

        button.id =
            "bbAIStudyButton";

        button.className =
            "btn btn-primary";

        button.style.cssText = `
            margin-top:15px;
            width:100%;
        `;

        button.innerHTML =
            "🤖 Generate Complete AI Study";

        button.onclick = async function () {

            const profile =
                bbGetProfile();

            const subject =
                window.studyState?.subject ||
                document.querySelector(
                    "[data-subject].active"
                )?.dataset.subject;

            const chapter =
                window.studyState?.chapter ||
                document.getElementById(
                    "studyChapter"
                )?.value;

            if (!subject || !chapter) {

                alert(
                    "Pehle Subject aur Chapter select karo."
                );

                return;
            }

            button.disabled = true;

            button.innerHTML =
                "⏳ Study material generate ho raha hai...";

            try {

                const html =
                    await bbGenerateStudy(
                        subject,
                        chapter
                    );

                if (!html) {

                    throw new Error(
                        "AI ne content nahi diya."
                    );
                }

                area.insertAdjacentHTML(
                    "beforeend",
                    `
                    <div
                        class="card"
                        id="bbAIStudyContent"
                        style="
                            margin-top:20px;
                            line-height:1.8;
                        "
                    >
                        <div
                            style="
                                display:flex;
                                justify-content:space-between;
                                gap:10px;
                                align-items:center;
                                flex-wrap:wrap;
                            "
                        >
                            <h2>
                                📚 ${subject}
                            </h2>

                            <span>
                                ${profile.className}
                            </span>
                        </div>

                        <hr style="margin:15px 0;">

                        <div class="lesson-content">
                            ${html}
                        </div>
                    </div>
                    `
                );

                document
                    .getElementById(
                        "bbAIStudyContent"
                    )
                    ?.scrollIntoView({
                        behavior: "smooth"
                    });

            } catch (error) {

                console.error(
                    "BharatBuddy Study Error:",
                    error
                );

                alert(
                    error.message ||
                    "Study content generate nahi ho paya."
                );

            } finally {

                button.disabled = false;

                button.innerHTML =
                    "🤖 Generate Complete AI Study";
            }
        };

        area.appendChild(button);
    }


    /* ---------------------------------------------------------
       REFRESH STUDY UI
    --------------------------------------------------------- */

    function bbRefreshStudy() {

        setTimeout(() => {

            bbApplySubjectFilter();

            bbShowStudyProfile();

            bbAddAIStudyButton();

        }, 150);
    }


    /* ---------------------------------------------------------
       WATCH PROFILE / PAGE CHANGES
    --------------------------------------------------------- */

    const originalRenderStudy =
        window.renderStudy;

    if (
        typeof originalRenderStudy ===
        "function"
    ) {

        window.renderStudy =
            function () {

                originalRenderStudy.apply(
                    this,
                    arguments
                );

                bbRefreshStudy();
            };
    }


    /* ---------------------------------------------------------
       PROFILE CHANGE DETECTOR
    --------------------------------------------------------- */

    let lastProfile =
        JSON.stringify(
            bbGetProfile()
        );

    setInterval(() => {

        const current =
            JSON.stringify(
                bbGetProfile()
            );

        if (current !== lastProfile) {

            lastProfile =
                current;

            console.log(
                "BharatBuddy profile changed."
            );

            bbRefreshStudy();

            if (
                typeof window.renderStudy ===
                "function"
            ) {

                try {

                    window.renderStudy();

                } catch (error) {

                    console.warn(
                        "Study refresh warning:",
                        error
                    );
                }
            }
        }

    }, 700);


    /* ---------------------------------------------------------
       INITIAL LOAD
    --------------------------------------------------------- */

    document.addEventListener(
        "DOMContentLoaded",
        function () {

            setTimeout(
                bbRefreshStudy,
                500
            );

        }
    );


})();
/* =========================================================
   BHARATBUDDY AI — PROFILE BASED NCERT STUDY SYSTEM
   ADD-ON ONLY — EXISTING CODE KO MODIFY NAHI KARTA
========================================================= */

(function () {

    "use strict";

    /* =====================================================
       CLASS 9
    ===================================================== */

    const BB_CLASS_9 = {

        Science: [
            "Matter in Our Surroundings",
            "Is Matter Around Us Pure?",
            "Atoms and Molecules",
            "Structure of the Atom",
            "The Fundamental Unit of Life",
            "Tissues",
            "Motion",
            "Force and Laws of Motion",
            "Gravitation",
            "Work and Energy",
            "Sound",
            "Why Do We Fall Ill?",
            "Natural Resources",
            "Improvement in Food Resources"
        ],

        Mathematics: [
            "Number Systems",
            "Polynomials",
            "Coordinate Geometry",
            "Linear Equations in Two Variables",
            "Introduction to Euclid's Geometry",
            "Lines and Angles",
            "Triangles",
            "Quadrilaterals",
            "Circles",
            "Heron's Formula",
            "Surface Areas and Volumes",
            "Statistics",
            "Probability"
        ],

        English: [
            "The Fun They Had",
            "The Sound of Music",
            "The Little Girl",
            "A Truly Beautiful Mind",
            "The Snake and the Mirror",
            "My Childhood",
            "Reach for the Top",
            "Kathmandu",
            "If I Were You"
        ],

        "Social Science": [
            "The French Revolution",
            "Socialism in Europe and the Russian Revolution",
            "Nazism and the Rise of Hitler",
            "Forest Society and Colonialism",
            "Pastoralists in the Modern World",
            "India – Size and Location",
            "Physical Features of India",
            "Drainage",
            "Climate",
            "Natural Vegetation and Wildlife",
            "Population",
            "What is Democracy? Why Democracy?",
            "Constitutional Design",
            "Electoral Politics",
            "Working of Institutions",
            "Democratic Rights",
            "The Story of Village Palampur",
            "People as Resource",
            "Poverty as a Challenge",
            "Food Security in India"
        ]

    };


    /* =====================================================
       CLASS 10
    ===================================================== */

    const BB_CLASS_10 = {

        Science: [
            "Chemical Reactions and Equations",
            "Acids, Bases and Salts",
            "Metals and Non-metals",
            "Carbon and Its Compounds",
            "Life Processes",
            "Control and Coordination",
            "How do Organisms Reproduce?",
            "Heredity",
            "Light – Reflection and Refraction",
            "The Human Eye and the Colourful World",
            "Electricity",
            "Magnetic Effects of Electric Current",
            "Our Environment"
        ],

        Mathematics: [
            "Real Numbers",
            "Polynomials",
            "Pair of Linear Equations in Two Variables",
            "Quadratic Equations",
            "Arithmetic Progressions",
            "Triangles",
            "Coordinate Geometry",
            "Introduction to Trigonometry",
            "Some Applications of Trigonometry",
            "Circles",
            "Areas Related to Circles",
            "Surface Areas and Volumes",
            "Statistics",
            "Probability"
        ],

        English: [
            "A Letter to God",
            "Nelson Mandela – Long Walk to Freedom",
            "Two Stories about Flying",
            "From the Diary of Anne Frank",
            "Glimpses of India",
            "Mijbil the Otter",
            "Madam Rides the Bus",
            "The Sermon at Benares",
            "The Proposal"
        ],

        "Social Science": [
            "The Rise of Nationalism in Europe",
            "Nationalism in India",
            "The Making of a Global World",
            "Print Culture and the Modern World",
            "Resources and Development",
            "Forest and Wildlife Resources",
            "Water Resources",
            "Agriculture",
            "Manufacturing Industries",
            "Lifelines of National Economy",
            "Power Sharing",
            "Federalism",
            "Gender, Religion and Caste",
            "Political Parties",
            "Outcomes of Democracy",
            "Development",
            "Sectors of the Indian Economy",
            "Money and Credit",
            "Globalisation and the Indian Economy",
            "Consumer Rights"
        ]

    };


    /* =====================================================
       CLASS 11 — PCM
    ===================================================== */

    const BB_CLASS_11_PCM = {

        Physics: [
            "Units and Measurements",
            "Motion in a Straight Line",
            "Motion in a Plane",
            "Laws of Motion",
            "Work, Energy and Power",
            "System of Particles and Rotational Motion",
            "Gravitation",
            "Mechanical Properties of Solids",
            "Mechanical Properties of Fluids",
            "Thermal Properties of Matter",
            "Thermodynamics",
            "Kinetic Theory",
            "Oscillations",
            "Waves"
        ],

        Chemistry: [
            "Some Basic Concepts of Chemistry",
            "Structure of Atom",
            "Classification of Elements and Periodicity in Properties",
            "Chemical Bonding and Molecular Structure",
            "Thermodynamics",
            "Equilibrium",
            "Redox Reactions",
            "Organic Chemistry – Some Basic Principles and Techniques",
            "Hydrocarbons"
        ],

        Mathematics: [
            "Sets",
            "Relations and Functions",
            "Trigonometric Functions",
            "Principle of Mathematical Induction",
            "Complex Numbers and Quadratic Equations",
            "Linear Inequalities",
            "Permutations and Combinations",
            "Binomial Theorem",
            "Sequences and Series",
            "Straight Lines",
            "Conic Sections",
            "Introduction to Three Dimensional Geometry",
            "Limits and Derivatives",
            "Statistics",
            "Probability"
        ],

        "Computer Science": [
            "Computer Systems",
            "Encoding Schemes and Number System",
            "Emerging Trends",
            "Introduction to Python",
            "Getting Started with Python",
            "Python Programming Fundamentals",
            "Conditional Statements",
            "Loops",
            "Strings",
            "Lists",
            "Tuples",
            "Dictionaries",
            "Computer Networks",
            "Societal Impact"
        ],

        English: [
            "The Portrait of a Lady",
            "We're Not Afraid to Die",
            "Discovering Tut",
            "Landscape of the Soul",
            "The Ailing Planet",
            "The Browning Version",
            "The Adventure",
            "Silk Road"
        ]

    };


    /* =====================================================
       CLASS 11 — PCB
    ===================================================== */

    const BB_CLASS_11_PCB = {

        Biology: [
            "The Living World",
            "Biological Classification",
            "Plant Kingdom",
            "Animal Kingdom",
            "Morphology of Flowering Plants",
            "Anatomy of Flowering Plants",
            "Structural Organisation in Animals",
            "Cell: The Unit of Life",
            "Biomolecules",
            "Cell Cycle and Cell Division",
            "Transport in Plants",
            "Mineral Nutrition",
            "Photosynthesis in Higher Plants",
            "Respiration in Plants",
            "Plant Growth and Development",
            "Digestion and Absorption",
            "Breathing and Exchange of Gases",
            "Body Fluids and Circulation",
            "Excretory Products and their Elimination",
            "Locomotion and Movement",
            "Neural Control and Coordination",
            "Chemical Coordination and Integration"
        ],

        Physics: BB_CLASS_11_PCM.Physics,

        Chemistry: BB_CLASS_11_PCM.Chemistry,

        English: BB_CLASS_11_PCM.English

    };


    /* =====================================================
       CLASS 11 — COMMERCE
    ===================================================== */

    const BB_CLASS_11_COMMERCE = {

        Accountancy: [
            "Introduction to Accounting",
            "Theory Base of Accounting",
            "Recording of Transactions",
            "Bank Reconciliation Statement",
            "Trial Balance and Rectification of Errors",
            "Depreciation",
            "Bills of Exchange",
            "Financial Statements",
            "Accounts from Incomplete Records"
        ],

        Economics: [
            "Introduction to Micro Economics",
            "Consumer Behaviour",
            "Production and Costs",
            "Theory of Firm",
            "Market",
            "Statistics for Economics",
            "Collection of Data",
            "Organisation of Data",
            "Presentation of Data",
            "Measures of Central Tendency",
            "Measures of Dispersion"
        ],

        "Business Studies": [
            "Nature and Purpose of Business",
            "Forms of Business Organisation",
            "Private, Public and Global Enterprises",
            "Business Services",
            "Emerging Modes of Business",
            "Social Responsibility of Business",
            "Formation of a Company",
            "Sources of Business Finance",
            "Small Business",
            "Internal Trade",
            "International Business"
        ],

        Mathematics: BB_CLASS_11_PCM.Mathematics,

        English: BB_CLASS_11_PCM.English

    };


    /* =====================================================
       CLASS 11 — ARTS
    ===================================================== */

    const BB_CLASS_11_ARTS = {

        History: [
            "From the Beginning of Time",
            "Writing and City Life",
            "An Empire Across Three Continents",
            "Nomadic Empires",
            "The Three Orders",
            "Changing Cultural Traditions",
            "Displacing Indigenous Peoples",
            "Paths to Modernisation"
        ],

        Geography: [
            "Geography as a Discipline",
            "The Origin and Evolution of the Earth",
            "Interior of the Earth",
            "Distribution of Oceans and Continents",
            "Minerals and Rocks",
            "Geomorphic Processes",
            "Landforms and their Evolution",
            "Composition and Structure of Atmosphere",
            "Solar Radiation",
            "Water in the Atmosphere",
            "World Climate and Climate Change",
            "Water Resources",
            "Natural Hazards and Disasters"
        ],

        PoliticalScience: [
            "Constitution: Why and How?",
            "Rights in the Indian Constitution",
            "Election and Representation",
            "Executive",
            "Legislature",
            "Judiciary",
            "Federalism",
            "Local Governments",
            "Political Theory",
            "Freedom",
            "Equality",
            "Social Justice",
            "Rights",
            "Citizenship",
            "Nationalism",
            "Secularism"
        ],

        Sociology: [
            "Sociology and Society",
            "Terms, Concepts and their Use in Sociology",
            "Understanding Social Institutions",
            "Culture and Socialisation",
            "Social Structure, Stratification and Social Processes",
            "Social Change and Social Order",
            "Introducing Western Sociologists",
            "Indian Sociologists"
        ],

        English: BB_CLASS_11_PCM.English

    };


    /* =====================================================
       CLASS 12
    ===================================================== */

    const BB_CLASS_12 = {

        Physics: [
            "Electric Charges and Fields",
            "Electrostatic Potential and Capacitance",
            "Current Electricity",
            "Moving Charges and Magnetism",
            "Magnetism and Matter",
            "Electromagnetic Induction",
            "Alternating Current",
            "Electromagnetic Waves",
            "Ray Optics and Optical Instruments",
            "Wave Optics",
            "Dual Nature of Radiation and Matter",
            "Atoms",
            "Nuclei",
            "Semiconductor Electronics"
        ],

        Chemistry: [
            "Solutions",
            "Electrochemistry",
            "Chemical Kinetics",
            "d and f Block Elements",
            "Coordination Compounds",
            "Haloalkanes and Haloarenes",
            "Alcohols, Phenols and Ethers",
            "Aldehydes, Ketones and Carboxylic Acids",
            "Amines",
            "Biomolecules"
        ],

        Mathematics: [
            "Relations and Functions",
            "Inverse Trigonometric Functions",
            "Matrices",
            "Determinants",
            "Continuity and Differentiability",
            "Application of Derivatives",
            "Integrals",
            "Application of Integrals",
            "Differential Equations",
            "Vector Algebra",
            "Three Dimensional Geometry",
            "Linear Programming",
            "Probability"
        ],

        Biology: [
            "Sexual Reproduction in Flowering Plants",
            "Human Reproduction",
            "Reproductive Health",
            "Principles of Inheritance and Variation",
            "Molecular Basis of Inheritance",
            "Evolution",
            "Human Health and Disease",
            "Microbes in Human Welfare",
            "Biotechnology",
            "Organisms and Populations",
            "Ecosystem",
            "Biodiversity and Conservation"
        ],

        "Computer Science": [
            "Computer Networking",
            "Data Communication",
            "Database Concepts",
            "Introduction to Python",
            "Functions",
            "File Handling",
            "Data Structures",
            "Computer Networks",
            "Cyber Safety"
        ],

        Economics: [
            "Introduction to Macroeconomics",
            "National Income Accounting",
            "Money and Banking",
            "Determination of Income and Employment",
            "Government Budget",
            "Balance of Payments",
            "Indian Economy on the Eve of Independence",
            "Indian Economy 1950–1990",
            "Liberalisation, Privatisation and Globalisation",
            "Human Capital Formation",
            "Rural Development",
            "Employment",
            "Environment and Sustainable Development"
        ],

        "Business Studies": [
            "Nature and Significance of Management",
            "Principles of Management",
            "Business Environment",
            "Planning",
            "Organising",
            "Staffing",
            "Directing",
            "Controlling",
            "Financial Management",
            "Marketing Management",
            "Consumer Protection"
        ],

        English: [
            "The Last Lesson",
            "Lost Spring",
            "Deep Water",
            "The Rattrap",
            "Indigo",
            "Poets and Pancakes",
            "The Interview",
            "Going Places"
        ]

    };


    /* =====================================================
       COMPLETE PROFILE → STUDY CATALOG
    ===================================================== */

    const BB_NCERT = {

        "Class 9": BB_CLASS_9,

        "Class 10": BB_CLASS_10,

        "Class 11": {

            PCM: BB_CLASS_11_PCM,
            PCB: BB_CLASS_11_PCB,
            Commerce: BB_CLASS_11_COMMERCE,
            Arts: BB_CLASS_11_ARTS,
            "Computer Science": {
                ...BB_CLASS_11_PCM
            }

        },

        "Class 12": BB_CLASS_12

    };


    /* =====================================================
       GET CURRENT PROFILE
    ===================================================== */

    function bbGetProfile() {

        const profile =
            (typeof data !== "undefined" &&
             data.profile)
                ? data.profile
                : {};

        return {

            className:
                profile.className ||
                localStorage.getItem("bb_class") ||
                "Class 11",

            stream:
                profile.stream ||
                localStorage.getItem("bb_stream") ||
                "PCM"

        };

    }


    /* =====================================================
       GET SUBJECTS
    ===================================================== */

    function bbGetSubjects() {

        const profile = bbGetProfile();

        if (
            profile.className === "Class 11"
        ) {

            const stream =
                BB_NCERT["Class 11"]
                    [profile.stream];

            if (stream) {
                return stream;
            }

            return BB_CLASS_11_PCM;

        }

        if (
            BB_NCERT[profile.className]
        ) {

            return BB_NCERT[
                profile.className
            ];

        }

        return BB_CLASS_11_PCM;

    }


    /* =====================================================
       CHECK SUBJECT
    ===================================================== */

    function bbSubjectAllowed(subject) {

        const subjects =
            bbGetSubjects();

        return Boolean(
            subjects &&
            subjects[subject]
        );

    }


    /* =====================================================
       GET CHAPTERS
    ===================================================== */

    function bbGetChapters(subject) {

        const subjects =
            bbGetSubjects();

        return subjects[subject] || [];

    }


    /* =====================================================
       SAVE PROFILE
    ===================================================== */

    function bbSaveProfileCache() {

        const profile =
            bbGetProfile();

        localStorage.setItem(
            "bb_class",
            profile.className
        );

        localStorage.setItem(
            "bb_stream",
            profile.stream
        );

    }


    /* =====================================================
       BUILD CHAPTER DROPDOWN
    ===================================================== */

    function bbUpdateChapterDropdown(
        subject
    ) {

        const dropdown =
            document.getElementById(
                "studyChapter"
            );

        if (!dropdown) return;

        const chapters =
            bbGetChapters(subject);

        dropdown.innerHTML = "";

        chapters.forEach(
            (chapter, index) => {

                const option =
                    document.createElement(
                        "option"
                    );

                option.value = chapter;

                option.textContent =
                    `${index + 1}. ${chapter}`;

                dropdown.appendChild(
                    option
                );

            }
        );

        if (chapters.length) {

            dropdown.value =
                chapters[0];

        }

    }


    /* =====================================================
       UPDATE SUBJECT BUTTONS
    ===================================================== */

    function bbUpdateSubjects() {

        const subjects =
            bbGetSubjects();

        document
            .querySelectorAll(
                "[data-subject]"
            )
            .forEach(button => {

                const subject =
                    button.dataset.subject;

                if (
                    Object.prototype
                        .hasOwnProperty
                        .call(
                            subjects,
                            subject
                        )
                ) {

                    button.style.display =
                        "";

                    button.disabled =
                        false;

                } else {

                    button.style.display =
                        "none";

                    button.disabled =
                        true;

                }

            });

    }


    /* =====================================================
       ADD PROFILE INFORMATION
    ===================================================== */

    function bbAddProfileInfo() {

        const study =
            document.querySelector(
                "#studySection"
            ) ||
            document.querySelector(
                ".study-section"
            ) ||
            document.querySelector(
                "[data-section='study']"
            );

        if (!study) return;

        if (
            document.getElementById(
                "bbStudyProfileInfo"
            )
        ) return;

        const profile =
            bbGetProfile();

        const box =
            document.createElement(
                "div"
            );

        box.id =
            "bbStudyProfileInfo";

        box.style.cssText = `
            padding:14px 16px;
            margin:12px 0;
            border-radius:14px;
            background:rgba(0,120,255,.08);
            border:1px solid rgba(0,120,255,.18);
            font-size:14px;
        `;

        box.innerHTML = `
            <strong>📚 BharatBuddy Study</strong>
            <br>
            Class:
            <strong>${profile.className}</strong>
            <br>
            Stream:
            <strong>${profile.stream}</strong>
            <br>
            <small>
                NCERT-aligned chapters are shown according
                to your selected profile.
            </small>
        `;

        study.prepend(box);

    }


    /* =====================================================
       AI COMPLETE LESSON GENERATOR
    ===================================================== */

    async function bbGenerateLesson(
        subject,
        chapter
    ) {

        const profile =
            bbGetProfile();

        const prompt = `

You are BharatBuddy AI, an Indian education tutor.

Student Profile:
Class: ${profile.className}
Stream: ${profile.stream}
Subject: ${subject}
Chapter: ${chapter}

Create ORIGINAL NCERT-aligned study material.

Do NOT copy textbook wording.

Create:

1. Chapter introduction
2. Learning objectives
3. Important definitions
4. Detailed concepts
5. Important formulas
6. Step-by-step derivations where applicable
7. Simple examples
8. Solved numerical problems where applicable
9. Important points
10. Common mistakes
11. Quick revision
12. 10 MCQs with answers
13. 5 very short questions
14. 5 short-answer questions
15. 5 long-answer questions
16. 5 practice problems
17. Chapter test

Use simple student-friendly language.

Do not invent unrelated topics.

Stay focused on the requested chapter.

`;

        const response =
            await fetch(
                "https://bharatbuddy-ai-36i4.onrender.com/api/chat",
                {

                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({
                            message: prompt
                        })

                }
            );

        let result = {};

        try {

            result =
                await response.json();

        } catch {

            result = {};

        }

        if (!response.ok) {

            throw new Error(
                result.error ||
                "AI lesson generation failed."
            );

        }

        return (
            result.reply ||
            result.answer ||
            result.output_text ||
            "AI ne response nahi diya."
        );

    }


    /* =====================================================
       GLOBAL STUDY API
    ===================================================== */

    window.BharatBuddyStudy = {

        getProfile:
            bbGetProfile,

        getSubjects:
            bbGetSubjects,

        getChapters:
            bbGetChapters,

        isSubjectAllowed:
            bbSubjectAllowed,

        updateSubjects:
            bbUpdateSubjects,

        updateChapters:
            bbUpdateChapterDropdown,

        generateLesson:
            bbGenerateLesson

    };


    /* =====================================================
       REFRESH STUDY
    ===================================================== */

    function bbRefreshStudy() {

        bbSaveProfileCache();

        bbUpdateSubjects();

        bbAddProfileInfo();

        const subjects =
            bbGetSubjects();

        const firstSubject =
            Object.keys(subjects)[0];

        if (firstSubject) {

            bbUpdateChapterDropdown(
                firstSubject
            );

        }

    }


    /* =====================================================
       PROFILE SAVE HOOK
    ===================================================== */

    const oldSaveProfile =
        window.saveProfile;

    if (
        typeof oldSaveProfile ===
        "function"
    ) {

        window.saveProfile =
            function () {

                const result =
                    oldSaveProfile.apply(
                        this,
                        arguments
                    );

                setTimeout(
                    bbRefreshStudy,
                    100
                );

                return result;

            };

    }


    /* =====================================================
       SUBJECT CLICK
    ===================================================== */

    document.addEventListener(
        "click",
        function (event) {

            const button =
                event.target.closest(
                    "[data-subject]"
                );

            if (!button) return;

            const subject =
                button.dataset.subject;

            if (
                !bbSubjectAllowed(
                    subject
                )
            ) {

                event.preventDefault();
                event.stopPropagation();

                alert(
                    "⚠️ Ye subject aapke selected class/stream ke liye available nahi hai."
                );

                return;

            }

            setTimeout(
                function () {

                    bbUpdateChapterDropdown(
                        subject
                    );

                },
                50
            );

        },
        true
    );


    /* =====================================================
       CHAPTER CHANGE
    ===================================================== */

    document.addEventListener(
        "change",
        function (event) {

            if (
                event.target.id !==
                "studyChapter"
            ) return;

            const subject =
                event.target
                    .dataset
                    .subject ||
                document
                    .querySelector(
                        "[data-subject].active"
                    )
                    ?.dataset
                    .subject;

            if (subject) {

                bbUpdateChapterDropdown(
                    subject
                );

            }

        }
    );


    /* =====================================================
       GENERATE BUTTON
    ===================================================== */

    function bbAddGenerateButton() {

        if (
            document.getElementById(
                "bbGenerateStudyButton"
            )
        ) return;

        const dropdown =
            document.getElementById(
                "studyChapter"
            );

        if (!dropdown) return;

        const button =
            document.createElement(
                "button"
            );

        button.id =
            "bbGenerateStudyButton";

        button.type =
            "button";

        button.textContent =
            "🤖 Generate Complete AI Study";

        button.style.cssText = `
            margin:12px 0;
            padding:12px 18px;
            border:0;
            border-radius:12px;
            cursor:pointer;
            font-weight:600;
            font-size:14px;
        `;

        dropdown.parentNode.insertBefore(
            button,
            dropdown.nextSibling
        );

        button.addEventListener(
            "click",
            async function () {

                const chapter =
                    dropdown.value;

                const activeSubject =
                    document
                        .querySelector(
                            "[data-subject].active"
                        )
                        ?.dataset
                        .subject;

                if (
                    !activeSubject
                ) {

                    alert(
                        "Pehle subject select karo."
                    );

                    return;

                }

                button.disabled =
                    true;

                button.textContent =
                    "⏳ AI Study bana raha hai...";

                try {

                    const answer =
                        await bbGenerateLesson(
                            activeSubject,
                            chapter
                        );

                    let container =
                        document.getElementById(
                            "bbAIStudyResult"
                        );

                    if (!container) {

                        container =
                            document.createElement(
                                "div"
                            );

                        container.id =
                            "bbAIStudyResult";

                        container.style.cssText = `
                            margin-top:16px;
                            padding:18px;
                            border-radius:16px;
                            background:rgba(0,0,0,.04);
                            line-height:1.7;
                            white-space:pre-wrap;
                        `;

                        button.parentNode
                            .appendChild(
                                container
                            );

                    }

                    container.textContent =
                        answer;

                    container.scrollIntoView({
                        behavior:
                            "smooth",
                        block:
                            "start"
                    });

                } catch (error) {

                    alert(
                        "❌ " +
                        error.message
                    );

                }

                button.disabled =
                    false;

                button.textContent =
                    "🤖 Generate Complete AI Study";

            }

        );

    }


    /* =====================================================
       INITIALIZE
    ===================================================== */

    function bbInitializeStudy() {

        bbSaveProfileCache();

        bbUpdateSubjects();

        bbAddProfileInfo();

        bbAddGenerateButton();

    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            function () {

                setTimeout(
                    bbInitializeStudy,
                    300
                );

            }
        );

    } else {

        setTimeout(
            bbInitializeStudy,
            300
        );

    }


})();
/* ============================================================
   BHARATBUDDY — COMPLETE CLASS 9/10/11/12 STUDY ENGINE
   CLASS-SAFE VERSION
   ============================================================ */

(function () {
    "use strict";

    /* =========================================================
       1. CURRENT PROFILE
    ========================================================= */

    function BB_getProfile() {
        try {
            return {
                className: data?.profile?.className || "Class 11",
                stream: data?.profile?.stream || "PCM"
            };
        } catch {
            return {
                className: "Class 11",
                stream: "PCM"
            };
        }
    }


    /* =========================================================
       2. COMPLETE SUBJECT MAP
    ========================================================= */

    const BB_SUBJECTS = {

        "Class 9": [
            "Mathematics",
            "Science",
            "Social Science",
            "English"
        ],

        "Class 10": [
            "Mathematics",
            "Science",
            "Social Science",
            "English"
        ],

        "Class 11": {
            PCM: [
                "Physics",
                "Chemistry",
                "Mathematics",
                "English",
                "Computer Science"
            ],

            PCB: [
                "Physics",
                "Chemistry",
                "Biology",
                "English",
                "Computer Science"
            ],

            Commerce: [
                "Accountancy",
                "Business Studies",
                "Economics",
                "English",
                "Mathematics"
            ],

            Arts: [
                "History",
                "Political Science",
                "Geography",
                "Economics",
                "English",
                "Sociology"
            ]
        },

        "Class 12": {
            PCM: [
                "Physics",
                "Chemistry",
                "Mathematics",
                "English",
                "Computer Science"
            ],

            PCB: [
                "Physics",
                "Chemistry",
                "Biology",
                "English",
                "Computer Science"
            ],

            Commerce: [
                "Accountancy",
                "Business Studies",
                "Economics",
                "English",
                "Mathematics"
            ],

            Arts: [
                "History",
                "Political Science",
                "Geography",
                "Economics",
                "English",
                "Sociology"
            ]
        }
    };


    function BB_getSubjects() {

        const profile = BB_getProfile();

        if (
            profile.className === "Class 9" ||
            profile.className === "Class 10"
        ) {
            return BB_SUBJECTS[profile.className] || [];
        }

        return (
            BB_SUBJECTS[profile.className]?.[profile.stream] ||
            []
        );
    }


    /* =========================================================
       3. CLASS 9 CHAPTERS
    ========================================================= */

    const BB_CLASS_9 = {

        Mathematics: [
            "Number Systems",
            "Polynomials",
            "Coordinate Geometry",
            "Linear Equations in Two Variables",
            "Introduction to Euclid's Geometry",
            "Lines and Angles",
            "Triangles",
            "Quadrilaterals",
            "Circles",
            "Heron's Formula",
            "Surface Areas and Volumes",
            "Statistics",
            "Probability"
        ],

        Science: [
            "Matter in Our Surroundings",
            "Is Matter Around Us Pure?",
            "Atoms and Molecules",
            "Structure of the Atom",
            "The Fundamental Unit of Life",
            "Tissues",
            "Motion",
            "Force and Laws of Motion",
            "Gravitation",
            "Work and Energy",
            "Sound",
            "Why Do We Fall Ill?",
            "Natural Resources",
            "Improvement in Food Resources"
        ],

        "Social Science": [
            "The French Revolution",
            "Socialism in Europe and the Russian Revolution",
            "Nazism and the Rise of Hitler",
            "Forest Society and Colonialism",
            "Pastoralists in the Modern World",
            "India — Size and Location",
            "Physical Features of India",
            "Drainage",
            "Climate",
            "Natural Vegetation and Wildlife",
            "Population",
            "What is Democracy? Why Democracy?",
            "Constitutional Design",
            "Electoral Politics",
            "Working of Institutions",
            "Democratic Rights",
            "The Story of Village Palampur",
            "People as Resource",
            "Poverty as a Challenge",
            "Food Security in India"
        ],

        English: [
            "Reading Skills",
            "Writing Skills",
            "Grammar",
            "Beehive",
            "Moments"
        ]
    };


    /* =========================================================
       4. CLASS 10 CHAPTERS
    ========================================================= */

    const BB_CLASS_10 = {

        Mathematics: [
            "Real Numbers",
            "Polynomials",
            "Pair of Linear Equations in Two Variables",
            "Quadratic Equations",
            "Arithmetic Progressions",
            "Triangles",
            "Coordinate Geometry",
            "Introduction to Trigonometry",
            "Some Applications of Trigonometry",
            "Circles",
            "Areas Related to Circles",
            "Surface Areas and Volumes",
            "Statistics",
            "Probability"
        ],

        Science: [
            "Chemical Reactions and Equations",
            "Acids, Bases and Salts",
            "Metals and Non-metals",
            "Carbon and Its Compounds",
            "Life Processes",
            "Control and Coordination",
            "How do Organisms Reproduce?",
            "Heredity",
            "Light — Reflection and Refraction",
            "The Human Eye and the Colourful World",
            "Electricity",
            "Magnetic Effects of Electric Current",
            "Our Environment"
        ],

        "Social Science": [
            "The Rise of Nationalism in Europe",
            "Nationalism in India",
            "The Making of a Global World",
            "The Age of Industrialisation",
            "Print Culture and the Modern World",
            "Resources and Development",
            "Forest and Wildlife Resources",
            "Water Resources",
            "Agriculture",
            "Minerals and Energy Resources",
            "Manufacturing Industries",
            "Lifelines of National Economy",
            "Power Sharing",
            "Federalism",
            "Gender, Religion and Caste",
            "Political Parties",
            "Outcomes of Democracy",
            "Development",
            "Sectors of the Indian Economy",
            "Money and Credit",
            "Globalisation and the Indian Economy",
            "Consumer Rights"
        ],

        English: [
            "Reading Skills",
            "Writing Skills",
            "Grammar",
            "First Flight",
            "Footprints Without Feet"
        ]
    };


    /* =========================================================
       5. CLASS 11 CHAPTERS
    ========================================================= */

    const BB_CLASS_11 = {

        Physics: [
            "Units & Measurements",
            "Motion in a Straight Line",
            "Motion in a Plane",
            "Laws of Motion",
            "Work, Energy and Power",
            "System of Particles and Rotational Motion",
            "Gravitation",
            "Mechanical Properties of Solids",
            "Mechanical Properties of Fluids",
            "Thermal Properties of Matter",
            "Thermodynamics",
            "Kinetic Theory",
            "Oscillations",
            "Waves"
        ],

        Chemistry: [
            "Some Basic Concepts of Chemistry",
            "Structure of Atom",
            "Classification of Elements and Periodicity in Properties",
            "Chemical Bonding and Molecular Structure",
            "Thermodynamics",
            "Equilibrium",
            "Redox Reactions",
            "Organic Chemistry — Some Basic Principles and Techniques",
            "Hydrocarbons"
        ],

        Mathematics: [
            "Sets",
            "Relations and Functions",
            "Trigonometric Functions",
            "Principle of Mathematical Induction",
            "Complex Numbers and Quadratic Equations",
            "Linear Inequalities",
            "Permutations and Combinations",
            "Binomial Theorem",
            "Sequences and Series",
            "Straight Lines",
            "Conic Sections",
            "Introduction to Three Dimensional Geometry",
            "Limits and Derivatives",
            "Statistics",
            "Probability"
        ],

        "Computer Science": [
            "Computer Fundamentals",
            "Computer System Organisation",
            "Data Representation",
            "Boolean Logic",
            "Programming Basics",
            "Python Programming",
            "Data Types",
            "Operators",
            "Conditional Statements",
            "Loops",
            "Strings",
            "Lists",
            "Tuples",
            "Dictionaries"
        ],

        English: [
            "Reading Comprehension",
            "Writing Skills",
            "Grammar",
            "Hornbill",
            "Snapshots"
        ],

        Biology: [
            "The Living World",
            "Biological Classification",
            "Plant Kingdom",
            "Animal Kingdom",
            "Morphology of Flowering Plants",
            "Anatomy of Flowering Plants",
            "Structural Organisation in Animals",
            "Cell — The Unit of Life",
            "Biomolecules",
            "Cell Cycle and Cell Division",
            "Photosynthesis in Plants",
            "Respiration in Plants",
            "Plant Growth and Development",
            "Breathing and Exchange of Gases",
            "Body Fluids and Circulation",
            "Excretory Products and their Elimination",
            "Locomotion and Movement",
            "Neural Control and Coordination",
            "Chemical Coordination and Integration"
        ],

        Accountancy: [
            "Introduction to Accounting",
            "Theory Base of Accounting",
            "Recording of Transactions",
            "Bank Reconciliation Statement",
            "Trial Balance and Rectification of Errors",
            "Depreciation",
            "Bills of Exchange",
            "Financial Statements",
            "Accounts from Incomplete Records"
        ],

        "Business Studies": [
            "Nature and Purpose of Business",
            "Forms of Business Organisation",
            "Private, Public and Global Enterprises",
            "Business Services",
            "Emerging Modes of Business",
            "Social Responsibility of Business",
            "Formation of a Company",
            "Sources of Business Finance",
            "Small Business",
            "Internal Trade",
            "International Business"
        ],

        Economics: [
            "Introduction to Economics",
            "Collection of Data",
            "Organisation of Data",
            "Presentation of Data",
            "Statistical Tools and Interpretation",
            "Introduction to Microeconomics",
            "Theory of Consumer Behaviour",
            "Production and Costs",
            "The Theory of the Firm",
            "Market",
            "Non-Competitive Markets"
        ],

        History: [
            "From the Beginning of Time",
            "Writing and City Life",
            "An Empire Across Three Continents",
            "The Central Islamic Lands",
            "Nomadic Empires",
            "The Three Orders",
            "Changing Cultural Traditions",
            "Confrontation of Cultures",
            "Displacing Indigenous Peoples",
            "Paths to Modernisation"
        ],

        Geography: [
            "Geography as a Discipline",
            "The Origin and Evolution of the Earth",
            "Interior of the Earth",
            "Distribution of Oceans and Continents",
            "Minerals and Rocks",
            "Geomorphic Processes",
            "Landforms and their Evolution",
            "Composition and Structure of Atmosphere",
            "Solar Radiation, Heat Balance and Temperature",
            "Atmospheric Circulation and Weather Systems",
            "Water in the Atmosphere",
            "World Climate and Climate Change",
            "Water",
            "Life on the Earth",
            "Biodiversity and Conservation"
        ],

        "Political Science": [
            "Constitution — Why and How?",
            "Rights in the Indian Constitution",
            "Election and Representation",
            "Executive",
            "Legislature",
            "Judiciary",
            "Federalism",
            "Local Governments",
            "Constitution as a Living Document",
            "The Philosophy of the Constitution"
        ],

        Sociology: [
            "Sociology and Society",
            "Terms, Concepts and their Use in Sociology",
            "Understanding Social Institutions",
            "Culture and Socialisation",
            "Social Change and Social Order",
            "Introducing Western Sociologists",
            "Indian Sociologists"
        ]
    };


    /* =========================================================
       6. CLASS 12 CHAPTERS
    ========================================================= */

    const BB_CLASS_12 = {

        Physics: [
            "Electric Charges and Fields",
            "Electrostatic Potential and Capacitance",
            "Current Electricity",
            "Moving Charges and Magnetism",
            "Magnetism and Matter",
            "Electromagnetic Induction",
            "Alternating Current",
            "Electromagnetic Waves",
            "Ray Optics and Optical Instruments",
            "Wave Optics",
            "Dual Nature of Radiation and Matter",
            "Atoms",
            "Nuclei",
            "Semiconductor Electronics"
        ],

        Chemistry: [
            "Solutions",
            "Electrochemistry",
            "Chemical Kinetics",
            "d and f Block Elements",
            "Coordination Compounds",
            "Haloalkanes and Haloarenes",
            "Alcohols, Phenols and Ethers",
            "Aldehydes, Ketones and Carboxylic Acids",
            "Amines",
            "Biomolecules"
        ],

        Mathematics: [
            "Relations and Functions",
            "Inverse Trigonometric Functions",
            "Matrices",
            "Determinants",
            "Continuity and Differentiability",
            "Applications of Derivatives",
            "Integrals",
            "Applications of Integrals",
            "Differential Equations",
            "Vector Algebra",
            "Three Dimensional Geometry",
            "Linear Programming",
            "Probability"
        ],

        "Computer Science": [
            "Computer Networks",
            "Database Concepts",
            "Introduction to Python",
            "Functions",
            "File Handling",
            "Data Structures",
            "Computer Security",
            "Societal Impacts"
        ],

        Biology: [
            "Sexual Reproduction in Flowering Plants",
            "Human Reproduction",
            "Reproductive Health",
            "Principles of Inheritance and Variation",
            "Molecular Basis of Inheritance",
            "Evolution",
            "Human Health and Disease",
            "Microbes in Human Welfare",
            "Biotechnology — Principles and Processes",
            "Biotechnology and its Applications",
            "Organisms and Populations",
            "Ecosystem",
            "Biodiversity and Conservation"
        ],

        Accountancy: [
            "Accounting for Partnership Firms",
            "Accounting for Companies",
            "Analysis of Financial Statements",
            "Cash Flow Statement"
        ],

        "Business Studies": [
            "Nature and Significance of Management",
            "Principles of Management",
            "Business Environment",
            "Planning",
            "Organising",
            "Staffing",
            "Directing",
            "Controlling",
            "Financial Management",
            "Financial Markets",
            "Marketing Management",
            "Consumer Protection"
        ],

        Economics: [
            "National Income Accounting",
            "Money and Banking",
            "Determination of Income and Employment",
            "Government Budget and the Economy",
            "Balance of Payments",
            "Development Experience",
            "Current Challenges Facing Indian Economy",
            "Development Experience of India"
        ],

        History: [
            "Bricks, Beads and Bones",
            "Kings, Farmers and Towns",
            "Kinship, Caste and Class",
            "Thinkers, Beliefs and Buildings",
            "Through the Eyes of Travellers",
            "Bhakti-Sufi Traditions",
            "An Imperial Capital — Vijayanagara",
            "Peasants, Zamindars and the State",
            "Kings and Chronicles",
            "Colonialism and the Countryside",
            "Rebels and the Raj",
            "Mahatma Gandhi and the Nationalist Movement",
            "Framing the Constitution"
        ],

        Geography: [
            "Human Geography",
            "The World Population",
            "Human Development",
            "Primary Activities",
            "Secondary Activities",
            "Tertiary and Quaternary Activities",
            "Transport and Communication",
            "International Trade",
            "Population Distribution",
            "Human Settlements",
            "Land Resources and Agriculture",
            "Water Resources",
            "Mineral and Energy Resources",
            "Manufacturing Industries",
            "Planning and Sustainable Development",
            "Transport and Communication",
            "International Trade"
        ],

        "Political Science": [
            "The End of Bipolarity",
            "Contemporary Centres of Power",
            "Contemporary South Asia",
            "International Organizations",
            "Security in the Contemporary World",
            "Environment and Natural Resources",
            "Globalisation",
            "Challenges of Nation-Building",
            "Era of One-Party Dominance",
            "Politics of Planned Development",
            "India's External Relations",
            "Challenges to and Restoration of the Congress System",
            "The Crisis of Democratic Order",
            "Regional Aspirations",
            "Recent Developments in Indian Politics"
        ],

        Sociology: [
            "Introducing Indian Society",
            "The Demographic Structure of Indian Society",
            "Social Institutions — Continuity and Change",
            "Patterns of Social Inequality and Exclusion",
            "Cultural Diversity of India",
            "Structural Change",
            "Cultural Change",
            "Change and Development in Rural Society",
            "Change and Development in Industrial Society",
            "Social Movements"
        ],

        English: [
            "Reading Comprehension",
            "Writing Skills",
            "Grammar",
            "Flamingo",
            "Vistas"
        ]
    };


    /* =========================================================
       7. MASTER CURRICULUM
    ========================================================= */

    const BB_CURRICULUM = {
        "Class 9": BB_CLASS_9,
        "Class 10": BB_CLASS_10,
        "Class 11": BB_CLASS_11,
        "Class 12": BB_CLASS_12
    };


    /* =========================================================
       8. GET CLASS-SPECIFIC CHAPTERS
    ========================================================= */

    function BB_getChapters(subject) {

        const profile = BB_getProfile();

        const classData =
            BB_CURRICULUM[profile.className];

        if (!classData) return [];

        return classData[subject] || [];
    }


    /* =========================================================
       9. CHECK SUBJECT
    ========================================================= */

    function BB_isValidSubject(subject) {
        return BB_getSubjects().includes(subject);
    }


    /* =========================================================
       10. CHECK CHAPTER
    ========================================================= */

    function BB_isValidChapter(subject, chapter) {
        return BB_getChapters(subject).includes(chapter);
    }


    /* =========================================================
       11. CLASS-SAFE KEY
    ========================================================= */

    function BB_makeKey(subject, chapter) {

        const profile = BB_getProfile();

        return [
            profile.className,
            profile.stream,
            subject,
            chapter
        ].join("|");
    }


    /* =========================================================
       12. CLASS-SAFE QUESTIONS
    ========================================================= */

    function BB_getQuestions(subject, chapter) {

        const profile = BB_getProfile();

        if (!BB_isValidSubject(subject)) {
            return [];
        }

        if (!BB_isValidChapter(subject, chapter)) {
            return [];
        }

        /*
           Existing old questions are used ONLY when they
           exactly match the selected class/subject/chapter.
        */

        const oldKey =
            `${subject}|${chapter}`;

        if (
            typeof chapterQuestions !== "undefined" &&
            chapterQuestions[oldKey] &&
            profile.className === "Class 11"
        ) {
            return chapterQuestions[oldKey];
        }

        /*
           For other classes, generate class-specific
           questions using the AI engine.
        */

        return [
            {
                type: "MCQ",
                question:
                    `Which class does this chapter belong to?`,
                options: [
                    profile.className,
                    "Class 6",
                    "Class 7",
                    "Class 8"
                ],
                answer: 0
            },

            {
                type: "MCQ",
                question:
                    `Which subject is this chapter from?`,
                options: [
                    subject,
                    "Computer Science",
                    "General Knowledge",
                    "Art"
                ],
                answer: 0
            },

            {
                type: "SHORT",
                question:
                    `Write one important concept you learned from "${chapter}".`,
                answer:
                    `The answer should correctly explain an important concept from ${chapter}.`
            },

            {
                type: "SHORT",
                question:
                    `Why is "${chapter}" important?`,
                answer:
                    `The student should explain the educational importance of ${chapter}.`
            },

            {
                type: "LONG",
                question:
                    `Explain the major concepts of "${chapter}" in your own words.`,
                answer:
                    `A good answer should explain the major concepts, definitions, examples and important points related to ${chapter}.`
            }
        ];
    }


    /* =========================================================
       13. CLASS-SAFE STUDY STATE
    ========================================================= */

    if (typeof studyState === "object") {

        const profile = BB_getProfile();

        studyState.className =
            profile.className;

        studyState.stream =
            profile.stream;

        const subjects =
            BB_getSubjects();

        if (
            !subjects.includes(
                studyState.subject
            )
        ) {
            studyState.subject =
                subjects[0] || null;
        }

        const chapters =
            BB_getChapters(
                studyState.subject
            );

        if (
            !chapters.includes(
                studyState.chapter
            )
        ) {
            studyState.chapter =
                chapters[0] || null;
            studyState.lessonIndex = 0;
        }
    }


    /* =========================================================
       14. CLASS CHANGE
    ========================================================= */

    let BB_lastProfile =
        JSON.stringify(
            BB_getProfile()
        );


    function BB_handleProfileChange() {

        const profile =
            BB_getProfile();

        const subjects =
            BB_getSubjects();

        if (
            !subjects.length
        ) {
            return;
        }

        if (
            !subjects.includes(
                studyState.subject
            )
        ) {

            studyState.subject =
                subjects[0];

            studyState.lessonIndex =
                0;
        }

        const chapters =
            BB_getChapters(
                studyState.subject
            );

        if (
            !chapters.includes(
                studyState.chapter
            )
        ) {

            studyState.chapter =
                chapters[0] || null;

            studyState.lessonIndex =
                0;
        }

        studyState.className =
            profile.className;

        studyState.stream =
            profile.stream;


        /* Update chapter dropdown */

        const dropdown =
            document.getElementById(
                "studyChapter"
            );

        if (dropdown) {

            dropdown.innerHTML = "";

            chapters.forEach(
                (chapter, index) => {

                    const option =
                        document.createElement(
                            "option"
                        );

                    option.value =
                        chapter;

                    option.textContent =
                        `${index + 1}. ${chapter}`;

                    dropdown.appendChild(
                        option
                    );
                }
            );

            if (
                studyState.chapter &&
                chapters.includes(
                    studyState.chapter
                )
            ) {
                dropdown.value =
                    studyState.chapter;
            }
        }


        /* Update subject buttons */

        document
            .querySelectorAll(
                "[data-subject]"
            )
            .forEach(button => {

                const subject =
                    button.dataset.subject;

                button.style.display =
                    subjects.includes(subject)
                        ? ""
                        : "none";
            });


        console.log(
            "BharatBuddy Study:",
            profile.className,
            profile.stream,
            studyState.subject,
            studyState.chapter
        );
    }


    /* =========================================================
       15. CLASS-SAFE CHAPTER TEST
    ========================================================= */

    function BB_startChapterTest() {

        const subject =
            studyState.subject;

        const chapter =
            studyState.chapter;

        if (!subject || !chapter) {

            alert(
                "Pehle Subject aur Chapter select karo."
            );

            return;
        }

        const questions =
            BB_getQuestions(
                subject,
                chapter
            );

        if (!questions.length) {

            alert(
                "Is chapter ke questions abhi available nahi hain."
            );

            return;
        }

        activeChapterTest = {

            className:
                BB_getProfile().className,

            stream:
                BB_getProfile().stream,

            subject,

            chapter,

            questions,

            current: 0,

            score: 0,

            answers: [],

            finished: false
        };


        if (
            typeof renderChapterTest ===
            "function"
        ) {
            renderChapterTest();
        }
    }


    /* =========================================================
       16. SAVE CLASS-SAFE TEST RESULT
    ========================================================= */

    function BB_saveTestResult(
        test
    ) {

        if (
            typeof data === "undefined" ||
            !data
        ) {
            return;
        }

        if (!data.chapterTests) {
            data.chapterTests = {};
        }

        const key =
            [
                test.className,
                test.stream,
                test.subject,
                test.chapter
            ].join("|");

        const total =
            test.questions.length;

        const percentage =
            total
                ? Math.round(
                    (
                        test.score /
                        total
                    ) * 100
                )
                : 0;

        data.chapterTests[key] = {

            className:
                test.className,

            stream:
                test.stream,

            subject:
                test.subject,

            chapter:
                test.chapter,

            score:
                test.score,

            total,

            percentage,

            date:
                new Date().toISOString()
        };


        try {

            localStorage.setItem(
                STORAGE_KEY,
                JSON.stringify(data)
            );

        } catch (error) {

            console.warn(
                "Could not save test result.",
                error
            );
        }
    }


    /* =========================================================
       17. AI CLASS-SPECIFIC STUDY
    ========================================================= */

    async function BB_generateStudy(
        subject,
        chapter
    ) {

        const profile =
            BB_getProfile();

        if (
            !BB_isValidSubject(subject)
        ) {
            throw new Error(
                "Selected subject is not available for this class."
            );
        }

        if (
            !BB_isValidChapter(
                subject,
                chapter
            )
        ) {
            throw new Error(
                "Selected chapter is not available for this subject/class."
            );
        }


        const prompt = `

You are BharatBuddy AI Study Engine.

STUDENT PROFILE
Class: ${profile.className}
Stream: ${profile.stream}
Subject: ${subject}
Chapter: ${chapter}

STRICT RULES:

1. Create ORIGINAL educational content.
2. Do NOT copy textbook wording.
3. Follow the selected class level.
4. Follow the requested subject.
5. Follow ONLY the requested chapter.
6. Never use content from another class.
7. Never mix Class 9, Class 10, Class 11 or Class 12.
8. Do not create unrelated chapters.
9. Keep explanations student-friendly.
10. For numerical subjects, include solved examples.
11. For theory subjects, include important concepts and examples.

Return HTML only.

STRUCTURE:

<h2>Chapter Overview</h2>

<h3>Concept Explanation</h3>

<h3>Important Definitions</h3>

<h3>Important Concepts</h3>

<h3>Important Formulas</h3>

<h3>Step-by-Step Examples</h3>

<h3>Solved Questions</h3>

<h3>Important Points</h3>

<h3>Common Mistakes</h3>

<h3>Quick Revision</h3>

<h3>MCQs</h3>
Create 10 MCQs with answers.

<h3>Very Short Questions</h3>
Create 5.

<h3>Short Answer Questions</h3>
Create 5.

<h3>Long Answer Questions</h3>
Create 5.

<h3>Practice Questions</h3>
Create 5.

Make the material appropriate for:
${profile.className}

Do not mention that this is a demo.
`;


        const response =
            await fetch(
                "https://bharatbuddy-ai-36i4.onrender.com/api/chat",
                {
                    method: "POST",

                    headers: {
                        "Content-Type":
                            "application/json"
                    },

                    body:
                        JSON.stringify({
                            message:
                                prompt
                        })
                }
            );


        let result = {};

        try {

            result =
                await response.json();

        } catch {

            result = {};
        }


        if (!response.ok) {

            throw new Error(
                result.error ||
                "AI Study generation failed."
            );
        }


        return (
            result.reply ||
            result.answer ||
            result.output_text ||
            ""
        );
    }


    /* =========================================================
       18. PUBLIC API
    ========================================================= */

    window.BharatBuddyCompleteStudy = {

        profile:
            BB_getProfile,

        subjects:
            BB_getSubjects,

        chapters:
            BB_getChapters,

        questions:
            BB_getQuestions,

        generate:
            BB_generateStudy,

        startTest:
            BB_startChapterTest,

        saveTest:
            BB_saveTestResult,

        key:
            BB_makeKey
    };


    /* =========================================================
       19. PROFILE WATCHER
    ========================================================= */

    setInterval(
        function () {

            const current =
                JSON.stringify(
                    BB_getProfile()
                );

            if (
                current !==
                BB_lastProfile
            ) {

                BB_lastProfile =
                    current;

                console.log(
                    "BharatBuddy class changed."
                );

                BB_handleProfileChange();

                try {

                    if (
                        typeof window.renderStudy ===
                        "function"
                    ) {
                        window.renderStudy();
                    }

                } catch (error) {

                    console.warn(
                        "Study refresh warning:",
                        error
                    );
                }
            }

        },
        500
    );


    /* =========================================================
       20. INITIALIZE
    ========================================================= */

    function BB_init() {

        try {

            BB_handleProfileChange();

        } catch (error) {

            console.warn(
                "BharatBuddy Study initialization error:",
                error
            );
        }
    }


    if (
        document.readyState ===
        "loading"
    ) {

        document.addEventListener(
            "DOMContentLoaded",
            BB_init
        );

    } else {

        BB_init();
    }

})();
>>>>>>> 6c5846d (Add BharatBuddy project)
