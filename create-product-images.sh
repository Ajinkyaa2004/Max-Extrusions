#!/bin/bash
cd /Users/ajinkya/Desktop/max-extrusions/public/images/products

# Color schemes for different products
declare -A colors=(
  ["carry-bags"]="#C84034:#D9642E"
  ["garbage-bags"]="#2563eb:#3b82f6"
  ["courier-bags"]="#7c3aed:#8b5cf6"
  ["ice-bags"]="#06b6d4:#22d3ee"
  ["plastic-films"]="#10b981:#34d399"
  ["stretch-wrap"]="#f59e0b:#fbbf24"
  ["pvc-shrink"]="#ec4899:#f472b6"
  ["mulching-film"]="#84cc16:#a3e635"
  ["lamination-film"]="#8b5cf6:#a78bfa"
  ["breathable-films"]="#14b8a6:#2dd4bf"
  ["pharmaceutical"]="#6366f1:#818cf8"
  ["biodegradable"]="#22c55e:#4ade80"
  ["transparent-sheets"]="#64748b:#94a3b8"
)

declare -A titles=(
  ["carry-bags"]="Plastic Carry Bags"
  ["garbage-bags"]="Garbage Bags"
  ["courier-bags"]="Courier Bags"
  ["ice-bags"]="Ice Bags"
  ["plastic-films"]="Plastic Films"
  ["stretch-wrap"]="Stretch Wrap"
  ["pvc-shrink"]="PVC Shrink Film"
  ["mulching-film"]="Mulching Film"
  ["lamination-film"]="Lamination Film"
  ["breathable-films"]="Breathable Films"
  ["pharmaceutical"]="Pharmaceutical Packaging"
  ["biodegradable"]="Biodegradable Products"
  ["transparent-sheets"]="Transparent Sheets"
)

for product in "${!colors[@]}"; do
  IFS=':' read -r color1 color2 <<< "${colors[$product]}"
  title="${titles[$product]}"
  
  cat > "${product}.svg" << EOF
<svg width="600" height="400" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="grad_${product}" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:${color1};stop-opacity:1" />
      <stop offset="100%" style="stop-color:${color2};stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="600" height="400" fill="url(#grad_${product})"/>
  <circle cx="300" cy="200" r="80" fill="white" opacity="0.1"/>
  <text x="50%" y="45%" text-anchor="middle" fill="white" font-size="28" font-family="Arial, sans-serif" font-weight="bold">${title}</text>
  <text x="50%" y="55%" text-anchor="middle" fill="white" font-size="14" font-family="Arial, sans-serif" opacity="0.9">Premium Quality</text>
  <rect x="20" y="20" width="60" height="30" rx="5" fill="white" opacity="0.2"/>
  <text x="50" y="40" text-anchor="middle" fill="white" font-size="12" font-weight="bold">MAX</text>
</svg>
EOF
  echo "Created ${product}.svg"
done

echo "All product images created successfully!"
