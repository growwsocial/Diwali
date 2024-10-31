  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap');

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Poppins', sans-serif;
            min-height: 100vh;
            background: linear-gradient(135deg, #4a0080, #9f07e7);
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
        }

        .container {
            background-color: rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 2rem;
            text-align: center;
            max-width: 400px;
            width: 90%;
        }

        h1 {
            color: #ffd700;
            font-size: 2.5rem;
            margin-bottom: 1rem;
            animation: glow 2s ease-in-out infinite alternate;
        }

        @keyframes glow {
            from { text-shadow: 0 0 5px #ffd700, 0 0 10px #ffd700; }
            to { text-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700; }
        }

        .diya {
            width: 200px;
            height: 250px;
            margin: 1rem auto;
            position: relative;
            animation: rotate 20s linear infinite;
        }

        .diya img {
            width: 100%;
            height: 100%;
            object-fit: contain;
        }

        .flame {
            position: absolute;
            top: 25%;
            left: 50%;
            width: 20px;
            height: 20px;
            background-color: #ffa500;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            animation: flicker 0.5s ease-in-out infinite alternate;
        }

        @keyframes rotate {
            from { transform: rotateY(0deg); }
            to { transform: rotateY(360deg); }
        }

        @keyframes flicker {
            from { transform: translate(-50%, -50%) scale(1); opacity: 0.8; }
            to { transform: translate(-50%, -50%) scale(1.2); opacity: 1; }
        }

        form {
            margin-top: 1rem;
        }

        input {
            width: 100%;
            padding: 0.5rem;
            margin-bottom: 1rem;
            border: none;
            border-radius: 5px;
            background-color: rgba(255, 255, 255, 0.2);
            color: white;
        }

        input::placeholder {
            color: rgba(255, 255, 255, 0.6);
        }

        button {
            width: 100%;
            padding: 0.5rem;
            border: none;
            border-radius: 5px;
            background-color: #ffd700;
            color: #4a0080;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        button:hover {
            background-color: #ffec80;
        }

        #message {
            margin-top: 1rem;
            color: white;
            font-size: 1.1rem;
            opacity: 0;
            transition: opacity 0.5s ease;
        }
