const attackDetails = {
    Virus: {
        title: "Virus",
        description: "A virus is a type of malicious software that, when executed, replicates by inserting copies of itself into other computer programs, data files, or the boot sector of the hard drive. The first known virus was the 'Creeper' virus, created in the early 1970s."
    },
    Worms: {
        title: "Worms",
        description: "Worms are a type of malware that replicate themselves in order to spread to other computers. Unlike a virus, a worm does not need to attach itself to an existing program. The 'Morris Worm' in 1988 was one of the first worms distributed via the internet."
    },
    Trojan: {
        title: "Trojan",
        description: "A Trojan horse is a type of malware that disguises itself as legitimate software. It can give a malicious user access to a user's system. The 'Zeus Trojan' is one of the most infamous Trojans used for stealing banking information."
    },
    Ransomware: {
        title: "Ransomware",
        description: "Ransomware is a type of malware that threatens to publish the victim's data or block access to it unless a ransom is paid. The 'WannaCry' ransomware attack in 2017 affected thousands of organizations worldwide."
    },
    Phishing: {
        title: "Phishing",
        description: "Phishing is a cyber attack that typically uses email to trick users into revealing personal information or installing malware. The 'Yahoo Data Breach' in 2013 is one of the largest phishing attacks, affecting over 3 billion accounts."
    },
    DDoS: {
        title: "DDoS",
        description: "Distributed Denial of Service (DDoS) attacks aim to make a service unavailable by overwhelming it with traffic from multiple sources. The 'GitHub DDoS attack' in 2018 was one of the largest recorded, peaking at 1.35 terabits per second."
    },
    Spyware: {
        title: "Spyware",
        description: "Spyware is software that secretly monitors user activity and collects personal information. The 'CoolWebSearch' spyware was notorious for hijacking web browsers and collecting user data without consent."
    },
    Adware: {
        title: "Adware",
        description: "Adware is software that automatically displays or downloads advertising material when a user is online. While not always malicious, some adware can track user behavior and collect data. The 'Gator' adware was known for its intrusive ads."
    },
    Rootkit: {
        title: "Rootkit",
        description: "A rootkit is a collection of software tools that enable unauthorized access to a computer or network while hiding its presence. The 'Sony BMG rootkit' scandal in 2005 involved software that installed itself on users' computers without their knowledge."
    },
    Keylogger: {
        title: "Keylogger",
        description: "A keylogger is a type of surveillance software that records keystrokes made by a user. This can be used to capture sensitive information such as passwords. The 'Spyrix Free Keylogger' is an example of software that can be used for both legitimate and malicious purposes."
    },
    Botnet: {
        title: "Botnet",
        description: "A botnet is a network of infected computers that are controlled by a single entity to perform tasks, often for malicious purposes. Botnets are commonly used for DDoS attacks and distributing spam."
    },
    "SQL Injection": {
        title: "SQL Injection",
        description: "SQL Injection is a code injection technique that exploits a vulnerability in an application's software by manipulating SQL queries. It can allow attackers to view or manipulate database information."
    },
    "Cross-Site Scripting": {
        title: "Cross-Site Scripting",
        description: "Cross-Site Scripting (XSS) is a vulnerability that allows attackers to inject malicious scripts into web pages viewed by other users. This can lead to data theft and session hijacking."
    },
    "Credential Stuffing": {
        title: "Credential Stuffing",
        description: "Credential stuffing is a type of cyber attack where stolen account credentials are used to gain unauthorized access to user accounts on various platforms. This is often facilitated by automated bots."
    },
    "Man-in-the-Middle": {
        title: "Man-in-the-Middle",
        description: "A Man-in-the-Middle (MitM) attack occurs when an attacker secretly intercepts and relays messages between two parties who believe they are directly communicating with each other."
    }
};

function showAttackInfo(attack) {
    const attackInfo = attackDetails[attack];
    document.getElementById('attack-title').innerText = attackInfo.title;
    document.getElementById('attack-description').innerText = attackInfo.description;
    document.getElementById('popup').style.display = 'flex';
}

function closePopup() {
    document.getElementById('popup').style.display = 'none';
}