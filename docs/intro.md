---
title: "Intro"
hide_table_of_contents: true
---

## 1) Machine Translation: Akkadian Transliteration to English Translation (Text-to-Text)

### Problem

Old Assyrian texts are preserved in Latin-script transliterations of Akkadian, a morphologically rich, low-resource language written in SOV order. The goal of this task is to build a model that can translate clause-aligned sequences of transliterated Akkadian into modern English. The architecture could use neural machine translation (NMT) or LLMs or any other architecture and the best outcome will receive the prize. Unlike high-resource benchmarks, these texts include non-standard orthography, domain-specific vocabulary, and many rare tokens—making generalization especially challenging. Alignments are noisy or incomplete in parts of the dataset, and performance depends critically on literal, structure-preserving translation. The outcome: models that can reliably render ancient administrative records into English, enabling broader historical and linguistic access.

### Advice

Pay close attention to the tokenization step, since there are currently no tokenizers made for Akkadian transliteration, this is typically where most models fail.

### How to handle the gap/lacuna in Akkadian transliterations

| Token   | Meaning                           | How created                         |
| ------- | --------------------------------- | ----------------------------------- |
| `⟨unk⟩` | Exactly one illegible sign        | Regex `\b[xX]\b` or `[x]` → `⟨unk⟩` |
| `⟨gap⟩` | One or more missing signs / lines | Regex `` `\\.\\.\\.``               |

_Both tokens are added to the tokenizer before training; evaluation scripts ignore their content but require them to be copied verbatim._

### Document the convention for competition

- Use the following substitutions:
  - `⟨unk⟩` = exactly one illegible sign (e.g. ‘x’ ‘…’)
  - `⟨gap⟩` = one or more illegible signs **or** a lacuna of one or more whole lines (e.g. [x x], [...], (n lines missing), etc.)
- These tokens **must be copied verbatim** in system outputs; BLEU / chrF evaluation scripts can then ignore them or score them as literals.
- Provide a _validation script_ that checks no other gap symbols sneak back in.

### Why not keep the original bracket soup?

- Tokenisers would split `[...]` into `[, ..., ]`, giving the model three embeddings instead of one.
- `x` clashes with genuine x’s in Sumerograms (`xšut` etc.) and with mathematical symbols in year names.
- Participants spend time reproducing your private conventions instead of focusing on translation quality.
