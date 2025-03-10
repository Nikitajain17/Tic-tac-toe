body {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background: linear-gradient(135deg, #667eea, #764ba2);
    font-family: 'Poppins', sans-serif;
    color: white;
    text-align: center;
}
h1 {
    font-size: 2.5em;
    margin-bottom: 20px;
    animation: fadeIn 1s ease-in-out;
}
.board {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: repeat(3, 100px);
    gap: 10px;
    background: rgba(255, 255, 255, 0.2);
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    animation: fadeIn 1.5s ease-in-out;
}
.cell {
    width: 100px;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2em;
    background: white;
    border-radius: 10px;
    transition: transform 0.2s ease, background 0.3s ease;
    cursor: pointer;
}
.cell:hover {
    background: #f8b400;
    transform: scale(1.1);
}
.cell.taken {
    cursor: not-allowed;
}
#status {
    margin-top: 20px;
    font-size: 1.5em;
    font-weight: bold;
    animation: fadeIn 2s ease-in-out;
}
#reset {
    margin-top: 15px;
    padding: 10px 20px;
    font-size: 1.2em;
    background: #f8b400;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background 0.3s ease, transform 0.2s ease;
}
#reset:hover {
    background: #ff8800;
    transform: scale(1.1);
}
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(-20px); }
    to { opacity: 1; transform: translateY(0); }
}
.confetti {
    position: fixed;
    width: 10px;
    height: 10px;
    background: gold;
    opacity: 0.8;
    animation: fall 3s linear infinite;
}
@keyframes fall {
    from { transform: translateY(-10vh) rotate(0deg); }
    to { transform: translateY(100vh) rotate(360deg); }
}
