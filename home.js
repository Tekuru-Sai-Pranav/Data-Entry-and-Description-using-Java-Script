function addData() {
    const input = document.getElementById('dataInput');
    const value = input.value.trim();

    if (value === '') return;

    const li = document.createElement('li');
    li.textContent = value;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    document.getElementById('dataList').appendChild(li);

    input.value = '';
}
