const plantDiseaseMap = {
      'Tomato': [
        {name:'Tomato Leaf Blight', desc:'Brown or black spots and yellowing appear on tomato leaves.', symptoms:'Leaf spots, yellow leaves, drying edges.', sol:'Remove affected leaves and use recommended fungicide.', prevention:'Avoid overhead watering and maintain spacing.'},
        {name:'Tomato Yellow Leaf Curl', desc:'A viral disease that causes upward leaf curling and yellowing.', symptoms:'Curled leaves, stunted growth, yellow veins.', sol:'Control whiteflies and remove infected plants.', prevention:'Use resistant varieties and insect nets.'}
      ],
      'Potato': [
        {name:'Potato Late Blight', desc:'Fast-spreading disease causing dark patches and leaf damage.', symptoms:'Dark water-soaked lesions and leaf collapse.', sol:'Improve drainage and use preventive spray.', prevention:'Avoid excessive moisture and rotate crops.'},
        {name:'Potato Early Blight', desc:'Circular brown spots appear on older leaves.', symptoms:'Brown ring spots and yellowing.', sol:'Remove infected leaves and use crop rotation.', prevention:'Use disease-free seed tubers.'}
      ],
      'Rice': [
        {name:'Rice Blast', desc:'Fungal disease causing diamond-shaped leaf spots.', symptoms:'Grey spots with brown borders.', sol:'Use balanced fertilizer and recommended fungicide.', prevention:'Use resistant seeds and proper field drainage.'},
        {name:'Rice Brown Spot', desc:'Small brown spots appear on leaves and grains.', symptoms:'Brown circular spots and weak plants.', sol:'Use quality seeds and balanced nutrients.', prevention:'Avoid drought stress.'}
      ],
      'Wheat': [{name:'Wheat Rust', desc:'Rust-colored powder appears on leaves and stems.', symptoms:'Orange/brown powdery pustules.', sol:'Apply suitable fungicide at early stage.', prevention:'Grow resistant wheat varieties.'}],
      'Maize': [{name:'Maize Leaf Blight', desc:'Long grey-green or brown lesions appear on maize leaves.', symptoms:'Long leaf lesions and drying.', sol:'Use disease-free seeds and remove infected debris.', prevention:'Rotate crops and maintain spacing.'}],
      'Cotton': [{name:'Cotton Leaf Curl', desc:'Viral disease reducing cotton growth and yield.', symptoms:'Leaf curling, thick veins, small leaves.', sol:'Control whiteflies and remove infected plants.', prevention:'Use resistant varieties and field sanitation.'}],
      'Groundnut': [{name:'Groundnut Tikka Disease', desc:'Circular dark leaf spots cause early leaf fall.', symptoms:'Dark spots and leaf drop.', sol:'Use seed treatment and recommended fungicide.', prevention:'Practice crop rotation.'}],
      'Chilli': [{name:'Chilli Anthracnose', desc:'Dark sunken spots appear on fruits and leaves.', symptoms:'Fruit rot, black lesions, leaf spots.', sol:'Remove infected fruits and apply fungicide.', prevention:'Avoid overhead watering.'}],
      'Brinjal': [{name:'Brinjal Bacterial Wilt', desc:'Plant wilts suddenly even when water is available.', symptoms:'Sudden wilting and yellowing.', sol:'Remove infected plants.', prevention:'Use clean soil and crop rotation.'}],
      'Okra': [{name:'Okra Yellow Vein Mosaic', desc:'Yellow vein patterns appear and fruits become small.', symptoms:'Yellow veins and stunted growth.', sol:'Control whiteflies.', prevention:'Remove infected plants early.'}],
      'Onion': [{name:'Onion Purple Blotch', desc:'Purple-brown lesions appear on onion leaves.', symptoms:'Purple spots and leaf drying.', sol:'Use clean seed and proper spacing.', prevention:'Avoid excess moisture.'}],
      'Mango Tree': [{name:'Mango Anthracnose', desc:'Dark lesions appear on leaves, flowers, and fruits.', symptoms:'Black spots and flower drying.', sol:'Prune infected parts and spray as advised.', prevention:'Maintain airflow in tree canopy.'}],
      'Banana Tree': [{name:'Banana Sigatoka', desc:'Leaf spot disease that reduces photosynthesis.', symptoms:'Brown streaks and leaf drying.', sol:'Remove infected leaves.', prevention:'Maintain proper spacing and drainage.'}],
      'Coconut Tree': [{name:'Coconut Leaf Rot', desc:'Young leaves rot and show brown discoloration.', symptoms:'Rotting young leaves.', sol:'Remove damaged leaves and use recommended treatment.', prevention:'Avoid stagnant water.'}],
      'Papaya Tree': [{name:'Papaya Ring Spot Virus', desc:'Ring spots appear on fruits with yellowing leaves.', symptoms:'Ring spots, yellowing, poor fruit quality.', sol:'Remove infected plants and control aphids.', prevention:'Use healthy seedlings.'}],
      'Guava Tree': [{name:'Guava Wilt', desc:'Leaves yellow and branches dry slowly.', symptoms:'Yellow leaves and branch drying.', sol:'Improve drainage and remove severely infected trees.', prevention:'Avoid waterlogging.'}],
      'Pomegranate Tree': [{name:'Pomegranate Bacterial Blight', desc:'Water-soaked spots appear on leaves and fruits.', symptoms:'Leaf spots and fruit lesions.', sol:'Prune infected branches.', prevention:'Avoid sprinkler irrigation.'}],
      'Grape Vine': [{name:'Grape Powdery Mildew', desc:'White powdery growth appears on leaves and fruits.', symptoms:'White patches, leaf curling, poor fruit quality.', sol:'Improve ventilation and use recommended spray.', prevention:'Avoid dense canopy.'}],
      'Apple Tree': [{name:'Apple Scab', desc:'Olive-green to brown spots appear on leaves and fruits.', symptoms:'Scabby spots on leaves and fruits.', sol:'Remove fallen leaves and use preventive spray.', prevention:'Maintain orchard hygiene.'}],
      'Orange Tree': [{name:'Citrus Canker', desc:'Bacterial disease causing raised corky spots.', symptoms:'Raised spots on leaves, stems, fruits.', sol:'Prune affected parts carefully.', prevention:'Avoid spreading infected plant material.'}],
      'Lemon Tree': [{name:'Lemon Citrus Canker', desc:'Raised corky lesions appear on leaves and fruits.', symptoms:'Corky spots and yellow halos.', sol:'Remove infected parts.', prevention:'Use disease-free plants.'}],
      'Neem Tree': [{name:'Neem Leaf Spot', desc:'Small dark spots appear on neem leaves.', symptoms:'Dark leaf spots.', sol:'Prune infected parts.', prevention:'Avoid water stagnation.'}],
      'Rose Plant': [{name:'Rose Black Spot', desc:'Black circular spots appear on rose leaves.', symptoms:'Black spots and yellow leaves.', sol:'Remove infected leaves.', prevention:'Improve sunlight and airflow.'}],
      'Jasmine Plant': [{name:'Jasmine Leaf Spot', desc:'Brown spots appear on jasmine leaves.', symptoms:'Brown leaf spots and leaf fall.', sol:'Remove diseased leaves.', prevention:'Avoid overcrowding.'}]
    };
    const diseaseData = [
      {name:'Tomato Leaf Blight', desc:'Brown or black spots and yellowing appear on tomato leaves.', symptoms:'Leaf spots, yellow leaves, drying edges.', sol:'Remove affected leaves and use recommended fungicide.', prevention:'Avoid overhead watering and maintain spacing.'},
      {name:'Tomato Yellow Leaf Curl', desc:'A viral disease that causes upward leaf curling and yellowing.', symptoms:'Curled leaves, stunted growth, yellow veins.', sol:'Control whiteflies and remove infected plants.', prevention:'Use resistant varieties and insect nets.'},
      {name:'Potato Late Blight', desc:'Fast-spreading disease causing dark patches and leaf damage.', symptoms:'Dark water-soaked lesions and leaf collapse.', sol:'Improve drainage and use preventive spray.', prevention:'Avoid excessive moisture and rotate crops.'},
      {name:'Rice Blast', desc:'Fungal disease causing diamond-shaped leaf spots.', symptoms:'Grey spots with brown borders.', sol:'Use balanced fertilizer and recommended fungicide.', prevention:'Use resistant seeds and proper field drainage.'},
      {name:'Wheat Rust', desc:'Rust-colored powder appears on leaves and stems.', symptoms:'Orange/brown powdery pustules.', sol:'Apply suitable fungicide at early stage.', prevention:'Grow resistant wheat varieties.'},
      {name:'Cotton Leaf Curl', desc:'Viral disease reducing cotton growth and yield.', symptoms:'Leaf curling, thick veins, small leaves.', sol:'Control whiteflies and remove infected plants.', prevention:'Use resistant varieties and field sanitation.'},
      {name:'Chilli Anthracnose', desc:'Dark sunken spots appear on fruits and leaves.', symptoms:'Fruit rot, black lesions, leaf spots.', sol:'Remove infected fruits and apply fungicide.', prevention:'Avoid overhead watering.'},
      {name:'Mango Anthracnose', desc:'Dark lesions appear on leaves, flowers, and fruits.', symptoms:'Black spots and flower drying.', sol:'Prune infected parts and spray as advised.', prevention:'Maintain airflow in tree canopy.'},
      {name:'Banana Sigatoka', desc:'Leaf spot disease that reduces photosynthesis.', symptoms:'Brown streaks and leaf drying.', sol:'Remove infected leaves.', prevention:'Maintain proper spacing and drainage.'},
      {name:'Citrus Canker', desc:'Bacterial disease causing raised corky spots.', symptoms:'Raised spots on leaves, stems, fruits.', sol:'Prune affected parts carefully.', prevention:'Avoid spreading infected plant material.'},
      {name:'Grape Powdery Mildew', desc:'White powdery growth appears on leaves and fruits.', symptoms:'White patches, leaf curling, poor fruit quality.', sol:'Improve ventilation and use recommended spray.', prevention:'Avoid dense canopy.'},
      {name:'Healthy Leaf', desc:'No major visible disease symptoms detected in this demo.', symptoms:'Green leaf and normal growth.', sol:'Continue monitoring and proper nutrition.', prevention:'Water correctly and inspect leaves weekly.'}
    ];
    const crops = [
      ['Tomato','Leaf Blight, Yellow Curl, Mosaic Virus','Use staking, avoid overhead watering, and check leaves regularly.'],
      ['Potato','Late Blight, Early Blight, Black Scurf','Use crop rotation and disease-free seed tubers.'],
      ['Rice','Blast, Brown Spot, Sheath Blight','Use resistant varieties and balanced fertilizer.'],
      ['Wheat','Rust, Smut, Powdery Mildew','Use resistant seeds and timely fungicide when required.'],
      ['Maize','Leaf Blight, Rust, Stalk Rot','Remove crop residues and maintain spacing.'],
      ['Cotton','Leaf Curl, Bacterial Blight, Boll Rot','Control whiteflies and select resistant varieties.'],
      ['Groundnut','Tikka Disease, Rust, Stem Rot','Practice crop rotation and seed treatment.'],
      ['Chilli','Anthracnose, Leaf Curl, Powdery Mildew','Remove infected fruits and avoid excess moisture.'],
      ['Brinjal','Bacterial Wilt, Phomopsis Blight','Use clean soil and remove wilted plants.'],
      ['Okra','Yellow Vein Mosaic, Powdery Mildew','Control whiteflies and remove infected plants.'],
      ['Cucumber','Downy Mildew, Mosaic Virus','Improve airflow and avoid wet leaves.'],
      ['Onion','Purple Blotch, Downy Mildew','Use proper spacing and clean seed.'],
      ['Cabbage','Black Rot, Clubroot','Avoid infected soil and rotate crops.'],
      ['Cauliflower','Downy Mildew, Alternaria Leaf Spot','Use healthy seedlings and field sanitation.'],
      ['Carrot','Leaf Blight, Root Rot','Avoid waterlogging and use clean seed.'],
      ['Peanut','Tikka Disease, Rust','Use seed treatment and remove infected leaves.'],
      ['Soybean','Rust, Bacterial Blight','Use resistant varieties and rotate crops.'],
      ['Sunflower','Leaf Spot, Downy Mildew','Avoid dense planting and remove residues.'],
      ['Sugarcane','Red Rot, Smut','Use healthy setts and resistant varieties.'],
      ['Mango Tree','Anthracnose, Powdery Mildew','Prune branches and improve air circulation.'],
      ['Banana Tree','Sigatoka, Panama Wilt','Remove infected leaves and maintain drainage.'],
      ['Coconut Tree','Leaf Rot, Bud Rot','Remove damaged leaves and avoid stagnant water.'],
      ['Papaya Tree','Ring Spot Virus, Leaf Curl','Control aphids and remove infected plants.'],
      ['Guava Tree','Wilt, Anthracnose','Improve drainage and prune infected branches.'],
      ['Pomegranate Tree','Bacterial Blight, Fruit Rot','Avoid sprinkler irrigation and prune affected parts.'],
      ['Grape Vine','Powdery Mildew, Downy Mildew','Maintain canopy ventilation and regular monitoring.'],
      ['Apple Tree','Apple Scab, Fire Blight','Remove fallen leaves and use preventive spray.'],
      ['Orange Tree','Citrus Canker, Greening','Use disease-free plants and prune infected parts.'],
      ['Lemon Tree','Citrus Canker, Sooty Mold','Control insects and remove infected leaves.'],
      ['Neem Tree','Leaf Spot, Powdery Mildew','Prune infected parts and avoid waterlogging.'],
      ['Drumstick Tree','Leaf Spot, Root Rot','Improve drainage and remove infected leaves.'],
      ['Teak Tree','Leaf Rust, Powdery Mildew','Keep plantation clean and monitor young leaves.'],
      ['Eucalyptus Tree','Leaf Blight, Canker','Remove diseased branches and avoid injury to bark.'],
      ['Rose Plant','Black Spot, Powdery Mildew','Prune, improve airflow, and avoid wet leaves.'],
      ['Jasmine Plant','Leaf Spot, Rust','Remove diseased leaves and avoid overcrowding.'],
      ['Hibiscus Plant','Leaf Curl, Yellow Mosaic','Control pests and remove infected shoots.'],
      ['Tulsi Plant','Leaf Spot, Root Rot','Avoid overwatering and maintain sunlight.'],
      ['Aloe Vera','Leaf Rot, Fungal Spots','Use well-drained soil and avoid excess water.'],
      ['Curry Leaf Plant','Leaf Spot, Sooty Mold','Control insects and prune affected leaves.'],
      ['Marigold','Powdery Mildew, Leaf Spot','Improve sunlight and reduce leaf wetness.']
    ];

    const loginScreen = document.getElementById('loginScreen');
    const app = document.getElementById('app');

    window.onload = () => {
      const savedUser = localStorage.getItem('plantguardUser');
      if(savedUser){ openApp(savedUser); }
      renderPlants();
    };

    document.getElementById('loginForm').addEventListener('submit', function(e){
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();
      const msg = document.getElementById('loginMessage');
      if(!email.includes('@') || password.length < 4){
        msg.style.display = 'block';
        return;
      }
      msg.style.display = 'none';
      const name = email.split('@')[0];
      if(document.getElementById('remember').checked){ localStorage.setItem('plantguardUser', name); }
      openApp(name);
    });

    function guestLogin(){ openApp('Guest Farmer'); }

    function showSelectedPlantInfo(){
      const plant = document.getElementById('selectedPlant').value;
      const info = document.getElementById('selectedPlantInfo');
      if(!plant){
        info.style.display = 'none';
        return;
      }
      const diseases = plantDiseaseMap[plant]?.map(d => d.name).join(', ') || 'General leaf disease detection';
      info.innerHTML = `<b>Selected:</b> ${plant}<br><b>Possible Diseases:</b> ${diseases}`;
      info.style.display = 'block';
    }
    function openApp(name){
      loginScreen.style.display = 'none';
      app.style.display = 'block';
      document.getElementById('userName').textContent = name;
      window.scrollTo(0,0);
    }
    function logout(){
      localStorage.removeItem('plantguardUser');
      app.style.display = 'none';
      loginScreen.style.display = 'grid';
      window.scrollTo(0,0);
    }
    function goTo(id){ document.getElementById(id).scrollIntoView({behavior:'smooth'}); }

    document.getElementById('leafInput').addEventListener('change', function(){
      const file = this.files[0];
      if(!file) return;
      const preview = document.getElementById('preview');
      preview.src = URL.createObjectURL(file);
      preview.style.display = 'block';

      const selectedPlant = document.getElementById('selectedPlant').value;
      const possibleDiseases = plantDiseaseMap[selectedPlant] || diseaseData;
      const chosen = possibleDiseases[Math.floor(Math.random() * possibleDiseases.length)];
      const confidence = Math.floor(Math.random() * 17) + 82;
      document.getElementById('empty').style.display = 'none';
      document.getElementById('result').style.display = 'block';
      document.getElementById('diseaseName').textContent = chosen.name;
      document.getElementById('description').textContent = chosen.desc;
      document.getElementById('confidenceText').textContent = confidence + '%';
      document.getElementById('symptoms').textContent = chosen.symptoms;
      document.getElementById('solution').textContent = chosen.sol;
      document.getElementById('prevention').textContent = chosen.prevention;
      window.lastReport = { disease: chosen.name, confidence, desc: chosen.desc, symptoms: chosen.symptoms, solution: chosen.sol, prevention: chosen.prevention, time: new Date().toLocaleString() };
      addHistory(window.lastReport);
      document.getElementById('confidenceFill').style.width = '0';
      setTimeout(() => document.getElementById('confidenceFill').style.width = confidence + '%', 120);
    });

    function renderPlants(){
      const list = document.getElementById('plantList');
      const q = (document.getElementById('plantSearch')?.value || '').toLowerCase();
      list.innerHTML = '';
      crops
        .filter(c => (c[0] + ' ' + c[1] + ' ' + c[2]).toLowerCase().includes(q))
        .forEach(c => {
          const div = document.createElement('div');
          div.className = 'plant';
          div.innerHTML = `<b>${c[0]}</b><small>${c[1]}</small>`;
          div.onclick = () => showPlant(c);
          list.appendChild(div);
        });
      if(!list.innerHTML){ list.innerHTML = '<p style="color:#bdf5ca;text-align:center;grid-column:1/-1">No plant found. Try another name.</p>'; }
    }

    function showPlant(crop){
      document.getElementById('modalTitle').textContent = crop[0];
      document.getElementById('modalDiseases').textContent = crop[1];
      document.getElementById('modalTip').textContent = crop[2];
      document.getElementById('plantModal').style.display = 'flex';
    }
    function closeModal(){ document.getElementById('plantModal').style.display = 'none'; }

    function toggleTheme(){
      document.body.classList.toggle('light');
      localStorage.setItem('plantguardTheme', document.body.classList.contains('light') ? 'light' : 'dark');
    }

    function addHistory(report){
      const history = JSON.parse(localStorage.getItem('plantguardHistory') || '[]');
      history.unshift(report);
      localStorage.setItem('plantguardHistory', JSON.stringify(history.slice(0,6)));
      renderHistory();
    }

    function renderHistory(){
      const box = document.getElementById('historyList');
      if(!box) return;
      const history = JSON.parse(localStorage.getItem('plantguardHistory') || '[]');
      if(history.length === 0){ box.innerHTML = '<div class="report-item">No diagnosis history yet.</div>'; return; }
      box.innerHTML = history.map(h => `<div class="report-item"><b>${h.disease}</b> - ${h.confidence}% confidence<br><small>${h.time}</small><br>${h.solution}</div>`).join('');
    }

    function clearHistory(){
      localStorage.removeItem('plantguardHistory');
      renderHistory();
    }

    function downloadReport(){
      if(!window.lastReport){ alert('Please upload a leaf image first.'); return; }
      const r = window.lastReport;
      const text = `PLANTGUARD AI DIAGNOSIS REPORT

Date: ${r.time}
Disease: ${r.disease}
Confidence: ${r.confidence}%

Description: ${r.desc}
Symptoms: ${r.symptoms}
Suggested Action: ${r.solution}
Prevention: ${r.prevention}

Project: Modern Approaches of Plant Disease Identification Using Machine Learning`;
      const blob = new Blob([text], {type:'text/plain'});
      const a = document.createElement('a');
      a.href = URL.createObjectURL(blob);
      a.download = 'PlantGuard_AI_Report.txt';
      a.click();
    }

    function shareReport(){
      if(!window.lastReport){ alert('Please upload a leaf image first.'); return; }
      const r = window.lastReport;
      const text = `PlantGuard AI Report: ${r.disease}, Confidence: ${r.confidence}%, Action: ${r.solution}`;
      navigator.clipboard.writeText(text).then(() => alert('Report copied successfully!'));
    }

    function askAssistant(){
      const q = document.getElementById('aiQuestion').value.toLowerCase();
      const ans = document.getElementById('aiAnswer');
      let reply = 'For healthy plants, inspect leaves weekly, avoid water stagnation, maintain spacing, and use disease-free seeds.';
      if(q.includes('tomato')) reply = 'For tomato, prevent blight by avoiding overhead watering, removing infected leaves, and maintaining good airflow.';
      else if(q.includes('rice')) reply = 'For rice, prevent blast using resistant varieties, balanced nitrogen fertilizer, and proper field drainage.';
      else if(q.includes('fung')) reply = 'Fungal diseases increase in high humidity. Improve spacing, remove infected leaves, and use recommended fungicide only when needed.';
      else if(q.includes('yellow')) reply = 'Yellow leaves may occur due to virus, nutrient deficiency, or water stress. Check pests first, then soil nutrients and watering.';
      else if(q.includes('organic')) reply = 'Organic care includes neem oil spray for pests, compost for nutrition, pruning infected parts, and crop rotation.';
      ans.textContent = reply;
      ans.style.display = 'block';
    }

    if(localStorage.getItem('plantguardTheme') === 'light') document.body.classList.add('light');
    renderHistory();

    setInterval(() => {
      const t = Math.floor(Math.random()*7)+27;
      const h = Math.floor(Math.random()*28)+52;
      const s = Math.floor(Math.random()*30)+34;
      const riskEl = document.getElementById('risk');
      document.getElementById('temp').textContent = t + '°C';
      document.getElementById('humidity').textContent = h + '%';
      document.getElementById('soil').textContent = s + '%';
      riskEl.className = '';
      if(h > 72){ riskEl.textContent = 'High'; riskEl.classList.add('risk-high'); }
      else if(h > 61){ riskEl.textContent = 'Medium'; riskEl.classList.add('risk-medium'); }
      else{ riskEl.textContent = 'Low'; riskEl.classList.add('risk-low'); }
    }, 3000);
