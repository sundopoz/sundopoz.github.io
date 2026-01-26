
// Data Structure
const roadmapData = [
  { m: 1, task: "เก็บศัพท์พื้นฐาน N5 + Hiragana/Katakana" },
  { m: 2, task: "จบไวยากรณ์ N5 + เริ่มคัด Kanji 100 ตัวแรก" },
  { m: 3, task: "ลุย N4 Grammar + ฝึกฟังบทสนทนาพื้นฐาน" },
  { m: 4, task: "จบ N4 + เริ่มอ่านนิทานหรือข่าวเด็ก" },
  { m: 5, task: "ก้าวสู่ N3 Grammar (ครึ่งแรก) + ทบทวนศัพท์" },
  { m: 6, task: "จบ N3 Grammar + ฝึก Shadows Listening" },
  { m: 7, task: "ตะลุยอ่านบทความ N3 + เริ่มศัพท์ N2" },
  { m: 8, task: "N2 Grammar (ครึ่งแรก) + ฝึกเขียนสรุปความ" },
  { m: 9, task: "N2 Grammar (ครึ่งหลัง) + ฟัง Podcast ญี่ปุ่น" },
  { m: 10, task: "เก็บตก Kanji N2 + ฝึกทำโจทย์ Reading" },
  { m: 11, task: "ทำข้อสอบเก่า N2 ย้อนหลัง + วิเคราะห์จุดผิด" },
  { m: 12, task: "Mock Exam จับเวลาจริง + ทบทวนจุดอ่อน" }
];

// State Management
let todos = JSON.parse(localStorage.getItem('n2_daily_todo')) || [];
let roadmapProgress = JSON.parse(localStorage.getItem('n2_roadmap_progress')) || {};

function enterSite() {
  document.getElementById('cover').style.transform = 'translateY(-100%)';
  document.getElementById('main-content').style.display = 'block';
}

function showSection(id, el) {
  document.querySelectorAll('section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  el.classList.add('active');
}

// Roadmap Logic
function renderRoadmap() {
  const container = document.getElementById('roadmap-container');
  container.innerHTML = roadmapData.map(item => `
                <div class="month-card">
                    <input type="checkbox" ${roadmapProgress[item.m] ? 'checked' : ''} onchange="toggleMonth(${item.m})">
                    <h3>Month ${item.m}</h3>
                    <p>${item.task}</p>
                </div>
            `).join('');
}

function toggleMonth(m) {
  roadmapProgress[m] = !roadmapProgress[m];
  localStorage.setItem('n2_roadmap_progress', JSON.stringify(roadmapProgress));
}

// Todo Logic
function addTodo() {
  const input = document.getElementById('todo-input');
  if (input.value) {
    todos.push({ text: input.value, done: false });
    input.value = '';
    saveAndRenderTodo();
  }
}

function toggleTodo(index) {
  todos[index].done = !todos[index].done;
  saveAndRenderTodo();
}

function deleteTodo(index) {
  todos.splice(index, 1);
  saveAndRenderTodo();
}

function saveAndRenderTodo() {
  localStorage.setItem('n2_daily_todo', JSON.stringify(todos));
  const list = document.getElementById('todo-list');
  list.innerHTML = todos.map((t, i) => `
                <div class="todo-item ${t.done ? 'done' : ''}">
                    <span onclick="toggleTodo(${i})" style="cursor:pointer">● ${t.text}</span>
                    <button onclick="deleteTodo(${i})" style="background:none; border:none; color:red; cursor:pointer">✕</button>
                </div>
            `).join('');
}

// Init
renderRoadmap();
saveAndRenderTodo();