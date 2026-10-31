# 🌿 SomaTrack V3: Monitoramento Neuro-Somático / Neuro-Somatic Monitor

> 🇧🇷 App mHealth para mapeamento multissistêmico do eixo cérebro-intestino, Sensibilização Central e intervenções de biofeedback em PAS.
> 
> 🇺🇸 Open-source mHealth app for Highly Sensitive Persons (HSP) to track central sensitization, brain-gut axis symptoms, and apply JITAI biofeedback.

---

## 🌍 Choose your language / Escolha o seu idioma
* [🇧🇷 Português](#-português)
* [🇺🇸 English](#-english)

---

## 🇧🇷 Português

O **SomaTrack V3** é uma aplicação web (SPA) focada em saúde digital (mHealth) desenhada especificamente para **Pessoas Altamente Sensíveis (PAS)**. O objetivo da plataforma é mapear a correlação clínica entre a sobrecarga sensorial ambiental, sintomas do eixo cérebro-intestino (primários) e dores musculoesqueléticas periféricas decorrentes da **Síndrome de Sensibilização Central (SSC)**.

### 🧠 Base Científica
A arquitetura do SomaTrack é baseada na literatura médica validada:
1. **Avaliação Ecológica Momentânea (EMA):** Coleta de dados rápida (menos de 5 segundos) baseada em inputs visuais para evitar fadiga cognitiva.
2. **Intervenções Adaptativas (JITAI):** Algoritmo de *biofeedback* que sugere exercícios de Coerência Cardíaca no momento exato da sobrecarga, prevenindo a somatização.
3. **Eixo Cérebro-Intestino e SSC:** Mapeamento de sintomas para rastrear o *Atraso de Fase (Phase Lag)* entre o estresse e a manifestação da dor.

### ✨ Principais Funcionalidades
* **100% Local e Privado:** Nenhum dado é enviado para a nuvem. Tudo funciona via `localStorage` no dispositivo do utilizador.
* **Mapeamento Multissistêmico:** Registo de dores primárias (cabeça, estômago) e periféricas (nuca, ombros, lombar, pernas).
* **Perfil Clínico do Paciente:** Cadastro de dados médicos relevantes para o relatório.
* **Relatórios Médicos (PDF):** Geração de relatórios formatados clinicamente com gráficos e tabelas para entrega ao médico.

### 🚀 Como executar (Localmente)
Como o projeto é construído 100% no Frontend (Vanilla JS, HTML, CSS), não há necessidade de configurar servidores ou bases de dados.
1. Clone o repositório:
   ```bash
   git clone [https://github.com/seu-usuario/somatrack.git](https://github.com/seu-usuario/somatrack.git)
