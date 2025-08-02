#!/bin/bash

echo "========================================"
echo "کلینیک محمدی - Monitoring"
echo "========================================"

echo ""
echo "وضعیت سرویس‌ها:"
echo ""

# Check Docker containers
echo "کانتینرهای Docker:"
docker ps --format "table {{.Names}}\t{{.Status}}\t{{.Ports}}"
echo ""

# Check system resources
echo "استفاده از منابع سیستم:"
echo "CPU Usage:"
top -bn1 | grep "Cpu(s)" | awk '{print $2}' | cut -d'%' -f1
echo "Memory Usage:"
free -h | grep Mem | awk '{print $3"/"$2}'
echo "Disk Usage:"
df -h / | tail -1 | awk '{print $5}'
echo ""

# Check application health
echo "بررسی سلامت برنامه:"
echo ""

# Check if website is accessible
if curl -s http://localhost > /dev/null; then
    echo "✅ وبسایت قابل دسترسی است"
else
    echo "❌ وبسایت قابل دسترسی نیست"
fi

# Check if admin panel is accessible
if curl -s http://localhost/admin > /dev/null; then
    echo "✅ پنل ادمین قابل دسترسی است"
else
    echo "❌ پنل ادمین قابل دسترسی نیست"
fi

# Check if API is accessible
if curl -s http://localhost/api/ > /dev/null; then
    echo "✅ API قابل دسترسی است"
else
    echo "❌ API قابل دسترسی نیست"
fi

echo ""

# Check logs
echo "آخرین خطاهای سیستم:"
docker-compose logs --tail=10 | grep -i error || echo "هیچ خطایی یافت نشد"
echo ""

# Check disk space
echo "فضای دیسک:"
df -h | grep -E 'Filesystem|/$'
echo ""

# Check memory usage by containers
echo "استفاده از حافظه توسط کانتینرها:"
docker stats --no-stream --format "table {{.Container}}\t{{.CPUPerc}}\t{{.MemUsage}}"
echo ""

echo "========================================"
echo "Monitoring کامل شد!"
echo "========================================"
echo "" 