# nurture-net
 AI homunculus created by AI and Human

                        [User (Human Fool)]
                                 |
                    ┌────────────┴────────────┐
                    |    Mobile/Web Client    |
                    | (React / React Native)  |
                    └────────────┬────────────┘
                                 |
                         [API Gateway]
                         (Express.js / FastAPI)
                                 |
       ┌─────────────────────────┼──────────────────────────┐
       |                         |                          |
[Text Engine]            [Drawing Engine]          [Progression Engine]
(GPT-J / Mistral)        (Stable Diffusion)        (Cool-downs, Unlocks,
 Filtered Vocabulary        Simulated Skill         Emotional Sim API)
    via Token Map              Growth)                      
       |                         |                          |
       └────────────┬────────────┴────────────┬────────────┘
                    |                         |
             [Gating Logic Layer]     [Interaction Tracker]
             (XP, Currency,          (Tracks words taught,
              Skill Tree)             drawings submitted)

                                 |
                           [Database]
             (PostgreSQL for user data, vocabulary, cooldowns)
             (Redis for temporary cooldowns/session cache)

                                 |
                          [Admin Panel/Telemetry]
         (To laugh at the data while plotting monetization)


