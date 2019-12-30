# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


user1 = User.create(name: "Grant")
user2 = User.create(name: "Brittney")
user3 = User.create(name: "Heidi")
user4 = User.create(name: "Yinning")

# word1 = Word.create(word: "precipitate", correct_letter: "i", partial_word: "precip_tate")
# word2 = Word.create(word: "serendipity", correct_letter: "e", partial_word: "ser_ndipity")
# word3 = Word.create(word: "apotheosis" , correct_letter: "e", partial_word: "apoth_osis")
# word4 = Word.create(word: "fleece", correct_letter: "e", partial_word: "fl_ece")
# word5 = Word.create(word: "avarice", correct_letter: "a", partial_word: "av_rice")
# word6 = Word.create(word: "pittance", correct_letter: "a", partial_word: "pitt_nce")
# word7 = Word.create(word: "prevaricate", correct_letter: "a", partial_word: "prev_ricate")
# word8 = Word.create(word: "sanctimonious", correct_letter: "i", partial_word: "sanct_monious")
# word9 = Word.create(word: "desecrate", correct_letter: "e", partial_word: "des_crate")
# word10 = Word.create(word: "reprobate", correct_letter: "o", partial_word: "repr_bate")
# word11 = Word.create(word: "supercilious", correct_letter: "i", partial_word: "superc_lious")
# word12 = Word.create(word: "quixotic", correct_letter: "u", partial_word: "q_ixotic")
# word13 = Word.create(word: "malapropism", correct_letter: "a", partial_word: "mal_propism")
# word14 = Word.create(word: "jaundice", correct_letter: "u", partial_word: "ja_ndice")
# word15 = Word.create(word: "mercurial", correct_letter: "e", partial_word: "m_rcurial")
# word16 = Word.create(word: "chauvinist", correct_letter: "i", partial_word: "chauv_nist")
# word17 = Word.create(word: "zeitgeist", correct_letter: "i", partial_word: "ze_tgeist")
# word18 = Word.create(word: "schadenfreude", correct_letter: "e", partial_word: "schad_nfreude")
# word19 = Word.create(word: "indigent", correct_letter: "e", partial_word: "indig_nt")
# word20 = Word.create(word: "scintillating", correct_letter: "i", partial_word: "scint_llating")

score1 = Score.create(score: 5, user_id: 1)
score2 = Score.create(score: 8, user_id: 2)
score3 = Score.create(score: 2, user_id: 3)
score4 = Score.create(score: 5, user_id: 4)
score5 = Score.create(score: 9, user_id: 1)