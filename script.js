    // Відновлення кількості натискань з LocalStorage
    let score = localStorage.getItem('blazeBattleScore') 
      ? parseInt(localStorage.getItem('blazeBattleScore')) 
      : 0;

    // Оновлення тексту лічильника
    const scoreElement = document.getElementById('score');
    scoreElement.textContent = `Score: ${score}`;

    // Кнопка для натискання
    const flameButton = document.getElementById('flame-button');
    flameButton.addEventListener('click', () => {
      score++;
      scoreElement.textContent = `Score: ${score}`;
      
      // Збереження кількості натискань у LocalStorage
      localStorage.setItem('blazeBattleScore', score);
    });

        function shakeButton(button) {
      button.classList.add('shake');
      setTimeout(() => {
        button.classList.remove('shake');
      }, 300); // Скидає анімацію після 0.3 секунди
    }

