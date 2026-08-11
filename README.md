# SqueezePDF

A blazingly fast, zero-dependency tool to aggressively compress PDF files, based on native macOS hardware-accelerated pipeline (Apple Metal & PDFKit).

## The Problem
Have you ever tried to compress a heavy PDFs (like design portfolios, marketing sheets, etc), only to find that the free tools mangle the content, break the layout, malform images, or barely reduce the file size? 

* The alternatives are either paying certain companies an expensive monthly subscription just for the "Reduce File Size" / "Compress a PDF" feature, 

* Or online tools that are free, but don't run locally. Those tools send your files to a third-party server, which may not be secure or private.

## The Solution
* **SqueezePDF** is a single local script that acts as a wrapper around Apple's native `PDFKit` engine. It uses an inline Swift script to securely interface with macOS's built-in PDF optimizer (`optimizeImagesForScreenOption` and `saveImagesAsJPEGOption`). 

* It takes massive, bloated PDFs, intelligently converts their embedded images to highly compressed JPEGs, and downsamples them for screen viewing — all locally, instantly, and for absolutely free. 

**Result**: A 1GB master PDF reduced to ~120MB in seconds (approximation). 

## Installation

No dependencies. No Homebrew. No Swift packages to compile.

1. Download the tool → https://SqueezePDF.mrittick.com
2. Setup the script → move the downloaded file to "/usr/local/bin/"
3. You may need to whitelist the script → Open Terminal, and run command "sudo xattr -d com.apple.quarantine /usr/local/bin/squeezepdf"

## Usage

* In Terminal, type "squeezepdf" followed by a space, then drag-and-drop the PDF file into the Terminal window, and press the Enter/Return key. 
* Wait for a few moments: the compressed output will be right beside the master file (with a "-compressed" suffix in its file name).
* The output will be in the exact same directory as the master file's.

## Why not use Ghostscript or Python?
1. Ghostscript is incredibly powerful but often struggles with modern PDF transparencies and complex vector layers, resulting in garbled or missing elements. 
2. Python tools require you to manage `pip` dependencies and virtual environments. SqueezePDF relies 100% on Apple's native `PDFKit` API, guaranteeing safety, compatibility, and zero dependency hell.

## License
MIT License. Free to use forever.

## Donate or Support
This is a free tool. If you find it useful, you can support its development, or just buy me a coffee! → https://paypal.me/mrittick